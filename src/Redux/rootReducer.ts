import { AppDispatch } from "./store";

export interface AppStore {
  books: Array<Book>;
}

export const initialState: AppStore = {
  books: [],
};

const ActionType = {
  GET_BOOKS: "GET_BOOKS",
};

const ActionCreator = {
  getBooks: (books: Array<Book>): Action => ({
    type: ActionType.GET_BOOKS,
    payload: books,
  }),
};

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionType.GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
  }

  return state;
}

export const Operation = {
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
