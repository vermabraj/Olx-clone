import axios from "axios";

export const getBikes = (params = {}) => {
  return axios.get(`https://legendary-bittersweet-ski.glitch.me/api/Cars`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      _sort: params.sort,
      _order: params.order
    }
  });
};
