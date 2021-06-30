import React from "react";
import { getProducts, getProduct } from "../services";

import { useQuery } from "react-query";

export const useGetProducts = () => {
  const { isLoading, isError, data, error } = useQuery("products", getProducts);
  return { isLoading, isError, data, error };
};

export const useGetProduct = (id) => {
  const { isLoading, isError, data, error } = useQuery(["products", id], () =>
    getProduct(id)
  );
  return { isLoading, isError, data, error };
};
