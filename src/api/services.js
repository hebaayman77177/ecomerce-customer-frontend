import axios from "./axios";

export const getShops = () => {
  return axios.get("/pages");
};

export const addShop = (data) => {
  return axios.post("/pages", data);
};

export const getShopProducts = (pageId) => {
  return axios.get(`/products?page=${pageId}`);
};

export const getShop = (shopId) => {
  return axios.get(`/pages?_id=${shopId}`);
};

export const getProducts = () => {
  return axios.get("/products");
};

export const getProduct = (id) => {
  return axios.get(`/products/${id}`);
};
