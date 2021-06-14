import { mockBook, mockBooksList } from "../Mocks/mocks";
import { AppDispatch } from "./store";

export interface AppStore {
  books: Array<BookSnippet>;
  selectedBook: Book;
}

export const initialState: AppStore = {
  books: [] as Array<BookSnippet>,
  selectedBook: {} as Book,
};

const ActionType = {
  GET_BOOKS: "GET_BOOKS",
  SELECT_BOOK: "SELECT_BOOK",
};

const ActionCreator = {
  getBooks: (books: Array<BookSnippet>): Action => ({
    type: ActionType.GET_BOOKS,
    payload: books,
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
    ({ title }) =>
    (dispatch: AppDispatch, getState, api) => {
      return api
        .get(
          `search.json?q=title:${title}&fields=key,cover_i,title,author_name,first_publish_year,key`,
        )
        .then((response) => {
          if (response.status === 200) {
            dispatch(ActionCreator.getBooks(response.data));
          }
        });
    },
};
