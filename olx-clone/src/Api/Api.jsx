import axios from "axios";

export const getCities = (params = {}) => {
  return axios.get(`https://lime-sun-attraction.glitch.me/api/All_category`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      _sort: params.sort,
      _order: params.order
    }
  });
};
