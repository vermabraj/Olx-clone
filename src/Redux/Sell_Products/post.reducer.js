import {
  ADD_GALLERY_SUCCESS,
  ADD_POST_SUCCESS,
  POST_GET_DELETE,
  POST_GET_ERROR,
  POST_GET_LOADING,
  POST_GET_SUCCESS,
  GALLERY_GET_SUCCESS,
  POST_GET_UPDATE,
} from "./post.types";

let initState = {
  loading: false,
  error: false,
  data: [],
};

const Sell_postReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_POST_SUCCESS: {
      return {
        ...state,
        payload,
      };
    }
    case POST_GET_UPDATE: {
      let edited = state.data.map((el) => {
        if (el._id === payload.id) {
          return payload.data;
        } else return el;
      });

      return {
        ...state,
        data: edited,
        loading: false,
        error: false,
      };
    }
    case POST_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case POST_GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case POST_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }

    case POST_GET_DELETE: {
      return {
        ...state,
        data: state.data.filter((product) => product._id !== payload),
      };
    }

    case ADD_GALLERY_SUCCESS: {
      return {
        ...state,
        payload,
      };
    }
    case GALLERY_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default Sell_postReducer;
