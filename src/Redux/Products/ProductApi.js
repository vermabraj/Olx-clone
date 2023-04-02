import axios from "axios";

export const getPostsApiAllCategory = async () => {
  let res = await axios.get(
    `https://congruous-fork-name.glitch.me/api/All_category?_limit=10`
  );
  return res.data;
};
export const getPostsApiCars = async () => {
  let res = await axios.get(`https://congruous-fork-name.glitch.me/api/Cars`);
  return res.data;
};

export const getPostsApiBikes = async () => {
  let res = await axios.get(`https://congruous-fork-name.glitch.me/api/Bikes`);
  return res.data;
};

export const getPostsApiMobiles = async () => {
  let res = await axios.get(`https://congruous-fork-name.glitch.me/api/Mobiles`);
  return res.data;
};

export const getPostsApiHouse = async () => {
  let res = await axios.get(
    `https://congruous-fork-name.glitch.me/api/House_And_Apartment`
  );
  return res.data;
};
