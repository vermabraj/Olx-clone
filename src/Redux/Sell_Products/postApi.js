import axios from "axios";

export const postApi = async () => {
  let res = await axios.get("https://sore-goat-pants.cyclic.app/products");
  return res.data;
};

export const deletePostApi = async (id) => {
  
  let res = await axios.delete(
    `https://sore-goat-pants.cyclic.app/products/delete/${id}`,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};


export const addPostApi = async (payload) => {
  let res = await axios.post(
    "https://sore-goat-pants.cyclic.app/products/create",
    payload,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};


