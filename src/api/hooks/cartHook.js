import React from "react";
import {
  createCartItem,
  deleteCartItem,
  editCartItem,
  getCart,
} from "../services";

import { mutation, useMutation ,useQuery} from "react-query";

export const useEditCartItem = (id) => {
  const mutation = useMutation((data) => editCartItem(id, data));
  return mutation;
};

export const useCreateCartItem = () => {
  const mutation = useMutation((data) => createCartItem( data));
  return mutation;
};

export const useDeleteCartItem = (id) => {
  const mutation = useMutation(() => deleteCartItem(id));
  return mutation;
};

export const useGetCart = (id) => {
  const { isLoading, isError, data, error } = useQuery(["cart", id], () =>
    getCart(id)
  );
  return { isLoading, isError, data, error };
};
