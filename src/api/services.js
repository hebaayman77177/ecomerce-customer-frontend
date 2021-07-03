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

//todo: optimize it to add and remove element from the array instead of replacing it every time
export const changeCart = (cartId, data) => {
  return axios.put(`/carts/${cartId}`, data);
};

export const getCart = (id) => {
  return axios.get(`/cart-items?customer.id=${id}`);
};

export const editCartItem = (id, data) => {
  return axios.put(`/cart-items/${id}`, data);
};

export const createCartItem = (data) => {
  return axios.post(`/cart-items`, data);
};

export const deleteCartItem = (id) => {
  return axios.delete(`/cart-items/${id}`);
};

export const getCustomerOrders = (id) => {
  return axios.get(`/order-items?customer.id=${id}`);
};

export const createOrder = (data) => {
  return axios.post(`/orders`, data);
};
