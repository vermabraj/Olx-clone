import {
  GET_POSTS_ERROR,
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./Product.types";
import {
  getPostsApiCars,
  getPostsApiBikes,
  getPostsApiAllCategory,
  getPostsApiHouse,
  getPostsApiMobiles,
} from "./ProductApi";

import axios from "axios";

export const getPostsAllCategory = () => async (dispatch) => {
  dispatch({ type: GET_POSTS_LOADING });
  try {
    let data = await getPostsApiAllCategory();

    dispatch({ type: GET_POSTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR });
  }
};

export const getPostsCars = () => async (dispatch) => {
  dispatch({ type: GET_POSTS_LOADING });
  try {
    let data = await getPostsApiCars();

    dispatch({ type: GET_POSTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR });
  }
};

export const getPostsBikes = () => async (dispatch) => {
  dispatch({ type: GET_POSTS_LOADING });
  try {
    let data = await getPostsApiBikes();

    dispatch({ type: GET_POSTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR });
  }
};

export const getPostsHouse = () => async (dispatch) => {
  dispatch({ type: GET_POSTS_LOADING });
  try {
    let data = await getPostsApiHouse();

    dispatch({ type: GET_POSTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR });
  }
};

export const getPostsMobiles = () => async (dispatch) => {
  dispatch({ type: GET_POSTS_LOADING });
  try {
    let data = await getPostsApiMobiles();

    dispatch({ type: GET_POSTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR });
  }
};
const getProductRequestAction = () => {
  return { type: GET_PRODUCT_REQUEST };
};

const getProductSuccessAction = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};

const getProductFailureAction = () => {
  return { type: GET_PRODUCT_FAILURE };
};

export const getProduct = (paramObj) => (dispatch) => {
  dispatch(getProductRequestAction());
  axios
    .get("https://congruous-fork-name.glitch.me/api/all_category", paramObj)

    .then((res) => dispatch(getProductSuccessAction(res.data)))

    .catch((err) => dispatch(getProductFailureAction()));
};
