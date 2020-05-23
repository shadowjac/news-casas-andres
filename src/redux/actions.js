import newsService from "../services";
import types from "./types";
import moment from "moment";

const setLoading = (isLoading) => {
  return {
    type: types.SET_LOADING,
    payload: isLoading,
  };
};

export const searchByCategoryAction = (category) => async (
  dispatch) => {
  dispatch(setLoading(true));
  const news = await newsService.searchByCategory(category);
  dispatch({
    type: types.SEARCH_NEWS_BY_CATEGORY,
    payload: news,
  });
};

export const searchByQueryAction = (query) => async (dispatch) => {
  dispatch(setLoading(true));
  const news = await newsService.searchBy(query);
  dispatch({
    type: types.SEARCH_NEWS_BY_QUERY,
    payload: news,
  });
};

export const getTodayNewsAction = () => async (dispatch) => {
  dispatch(setLoading(true));
  const news = await newsService.searchByDate(moment().format("YYYY-MM-DD"));
  dispatch({
    type: types.SEARCH_TODAY_NEWS,
    payload: news,
  });
};
