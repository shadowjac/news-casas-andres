import { settings } from "../configuration/settings";

export const baseService = {
    get: async (path) => {
      const baseUrl = settings.newsUrl;
      const response = await fetch(`${baseUrl}${path}`);
      return await response.json();
    },
  };