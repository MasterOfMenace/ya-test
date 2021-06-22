import { AxiosInstance, AxiosResponse } from "axios";
import { ThunkAction } from "redux-thunk";
import { AppDispatch } from "./store";
import { mockBook, mockBooksList } from "../Mocks/mocks";

export interface AppStore {
  countOfBooksFound: number;
  books: Array<BookSnippet>;
  selectedBook: Book;
}

export const initialState: AppStore = {
  countOfBooksFound: 0,
  books: [] as Array<BookSnippet>,
  selectedBook: {} as Book,
};

const ActionType = {
  GET_BOOKS: "GET_BOOKS",
  GET_COUNT_OF_BOOKS: "GET_COUNT_OF_BOOKS",
  SELECT_BOOK: "SELECT_BOOK",
};

const ActionCreator = {
  getBooks: (books: Array<BookSnippet>): Action => ({
    type: ActionType.GET_BOOKS,
    payload: books,
  }),

  getCountOfBooks: (countOfBooks: number): Action => ({
    type: ActionType.GET_COUNT_OF_BOOKS,
    payload: countOfBooks,
  }),

  selectBook: (book: Book): Action => ({
    type: ActionType.SELECT_BOOK,
    payload: book,
  }),
};

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionType.GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };

    case ActionType.GET_COUNT_OF_BOOKS:
      return {
        ...state,
        countOfBooksFound: action.payload,
      };

    case ActionType.SELECT_BOOK:
      return {
        ...state,
        selectedBook: action.payload,
      };
  }

  return state;
}

export const Operation = {
  getMockBooks: () => (dispatch: AppDispatch) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("done");
        dispatch(ActionCreator.getBooks(mockBooksList));
      }, 1000);
    });
  },

  selectMockBook: () => (dispatch: AppDispatch) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("done");
        dispatch(ActionCreator.selectBook(mockBook));
      }, 1000);
    });
  },

  getBooks:
    ({
      searchValue,
      page,
    }: {
      searchValue: string;
      page: number;
    }): ThunkAction<void, AppStore, AxiosInstance, Action> =>
    (dispatch: AppDispatch, _, api: AxiosInstance) => {
      return api
        .get(
          `search.json?q=title:${searchValue}&fields=cover_i,title,author_name,edition_key,edition_count,edition_key, cover_edition_key&page=${page}`,
        )
        .then((response: AxiosResponse) => {
          console.log(response.data);
          let { docs } = response.data;

          docs = docs.map(
            (doc: any): BookSnippet => ({
              coverId: doc?.cover_i,
              coverEditionKey: doc?.cover_edition_key, // по этому ключу поиск в букс апи
              title: doc?.title,
              author: doc?.author_name?.[0],
              editionCount: doc?.edition_count,
              editionKey: doc?.edition_key,
            }),
          );

          console.log(docs);
          dispatch(ActionCreator.getCountOfBooks(response.data.numFound));
          dispatch(ActionCreator.getBooks(docs));
        })
        .catch((error: Error) => console.log(error));
    },

  selectBook:
    (book: BookSnippet): ThunkAction<void, AppStore, AxiosInstance, Action> =>
    (dispatch: AppDispatch, _, api: AxiosInstance) => {
      console.log(book);
      return api.get(`/books/${book.coverEditionKey}.json`).then((response: AxiosResponse) => {
        console.log(response.data);
        const data = response.data;
        const bookData = {
          ...book,
          publishYear: data.publish_date,
          publisher: data.publishers[0],
          isbn10: data.isbn_10[0],
          isbn13: data.isbn_13[0],
        };
        dispatch(ActionCreator.selectBook(bookData));
      });
    },
};
