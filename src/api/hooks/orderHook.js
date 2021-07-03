import { createOrder } from "../services";
import { useMutation } from "react-query";

export const useCreateOrder = () => {
  const mutation = useMutation((data) => createOrder(data));
  return mutation;
};
