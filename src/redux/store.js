import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import types from "./types";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  news: [],
  isLoading: true,
};

const rootReducer = (state = initialState, action) => {
  ;
  switch (action.type) {
    case types.SEARCH_NEWS_BY_CATEGORY:
    case types.SEARCH_NEWS_BY_QUERY:
    case types.SEARCH_TODAY_NEWS:
      return {
        ...state,
        news: action.payload,
        isLoading: false,
      };
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

const middleware = [thunkMiddleware];
export default createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);
