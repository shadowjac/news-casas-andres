import { settings } from "../configuration/settings";

export const baseService = {
    get: async (url) => {
      const baseUrl = settings.newsUrl;
      const response = await fetch(`${baseUrl}${url}`);
      return await response.json();
    },
  };