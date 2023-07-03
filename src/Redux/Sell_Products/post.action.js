import {
  ADD_GALLERY_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_LOADING,
  ADD_POST_SUCCESS,
  FILTER_BY_MR,
  GALLERY_GET_ERROR,
  GALLERY_GET_LOADING,
  GALLERY_GET_SUCCESS,
  POST_GET_DELETE,
  POST_GET_ERROR,
  POST_GET_LOADING,
  POST_GET_SUCCESS,
  POST_GET_UPDATE,
} from "./post.types";
import axios from "axios";
import {
  addGalleryApi,
  addPostApi,
  deletePostApi,
  getGalleryApi,
  postApi,
} from "./postApi";

export const getPosts = () => async (dispatch) => {
  dispatch({ type: POST_GET_LOADING });
  try {
    let data = await postApi();

    dispatch({ type: POST_GET_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: POST_GET_ERROR });
  }
};

export const updatePost = (id, data) => async (dispatch) => {
  try {
    await axios.patch(
      `https://sore-goat-pants.cyclic.app/products/update/${id}`,
      data,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    dispatch(getPosts());
  } catch (err) {
    throw err;
  }
};

export const deletePosts = (id) => async (dispatch) => {
  try {
    let data = await deletePostApi(id);
    dispatch({
      type: POST_GET_DELETE,
      payload: id,
    });
    dispatch(getPosts());
  } catch (e) {
    dispatch({
      type: POST_GET_ERROR,
      payload: e,
    });
  }
};
export const addProducts = (payload) => async (dispatch) => {
  dispatch({ type: ADD_POST_LOADING });
  try {
    let data = await addPostApi(payload);

    dispatch({ type: ADD_POST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ADD_POST_FAILURE });
  }
};

export const getGallery = () => async (dispatch) => {
  dispatch({ type: ADD_POST_LOADING });
  try {
    let data = await getGalleryApi();

    dispatch({ type: GALLERY_GET_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ADD_POST_FAILURE });
  }
};

export const addGallery = (payload) => async (dispatch) => {
  dispatch({ type: GALLERY_GET_LOADING });
  try {
    let data = await addGalleryApi(payload);

    dispatch({ type: ADD_GALLERY_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GALLERY_GET_ERROR });
  }
};
