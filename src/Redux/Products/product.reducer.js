import {
  GET_POSTS_ERROR,
  GET_POSTS_LOADING,
  GET_POSTS_RESET,
  GET_POSTS_SUCCESS,
} from "./Product.types";

let initState = {
  loading: false,
  error: false,
  data: [],
  categories: {},
  isAuth: false,
};

export const postReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case GET_POSTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_POSTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_POSTS_SUCCESS: {
     
      const categories = {};
      payload.forEach((product) => {
        if (categories[product.title] == undefined) {
          categories[product.title] = 1;
        } else categories[product.title]++;
      });
     
      return {
        ...state,
        loading: false,
        data: payload,
        categories: categories,
      };
    }
    case GET_POSTS_RESET: {
      return { ...initState };
    }

    case "SORT_LOW_TO_HIGH": {
      state.data.sort((a, b) => convertToNum(a.price) - convertToNum(b.price));
      let newData = [...state.data];
      return { ...state, data: newData };
    }
    case "SORT_HIGH_TO_LOW": {
      state.data.sort((a, b) => convertToNum(b.price) - convertToNum(a.price));
      let newData = [...state.data];
      return { ...state, data: newData };
    }
    case "FILTER_BY_PRICE_RANGE": {
      let newData = state.data.filter((product) => {
        return convertToNum(product.price) <= payload;
      });
      
      return { ...state, data: [...newData] };
    }
    case "FILTER_BY_CATEGORY": {
      let filteredData = state.data.filter(
        (product) => product.title == payload
      );

      return { ...state, data: filteredData };
    }
    case "AUTH_SUCCESS": {
      return {
        ...state,
        isAuth: true,
      };
    }
    case "AUTH_FAIL": {
      return {
        ...state,
        isAuth: false,
      };
    }

    default: {
      return state;
    }
  }
};
function convertToNum(str) {
  str = str.split("");
  str = str.filter((elem) => !isNaN(elem));
  str = str.join("");
  const num = +str;
  return num;
}
