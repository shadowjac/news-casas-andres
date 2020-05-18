import { baseService } from "./baseService";

const newsService = {
  searchByDate: async (date) => baseService.get(`/latest/${date}`),

  searchByCategory: async (category) =>
    baseService.get(`/news/category/${category}`),

  searchBy: async (query) => baseService.get(`/search/${query}`),
};
export default newsService;
