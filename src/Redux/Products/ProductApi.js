import axios from "axios";

export const getPostsApiAllCategory = async () => {
  let res = await axios.get(
    `https://sore-goat-pants.cyclic.app/products?_limit=10`
  );
  return res.data;
};
export const getPostsApiCars = async () => {
  let res = await axios.get(
    `https://sore-goat-pants.cyclic.app/products?category=car`
  );
  return res.data;
};

export const getPostsApiBikes = async () => {
  let res = await axios.get(
    `https://sore-goat-pants.cyclic.app/products?category=bike`
  );
  return res.data;
};

export const getPostsApiMobiles = async () => {
  let res = await axios.get(
    `https://sore-goat-pants.cyclic.app/products?category=mobile`
  );
  return res.data;
};

export const getPostsApiHouse = async () => {
  let res = await axios.get(
    `https://sore-goat-pants.cyclic.app/products?category=home_and_apartment`
  );
  return res.data;
};
