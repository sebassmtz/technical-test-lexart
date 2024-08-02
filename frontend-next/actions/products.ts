import { AddProduct, EditProduct, Product } from "@/types/product";

import axios from "@/actions/conf";
import Cookies from "js-cookie";

export const getAllProducts = async () => {
  const response = await axios.get<Product[]>("/product", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const deleteProduct = async (id: number) => {
  const response = await axios.delete<Product>(`/product/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  });
  return response.data;
};

export const deleteAllproducts = async () => {
  const response = await axios.delete<Product>(`/all/product`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  });
  return response.data;
};

export const loadProducts = async () => {
  const response = await axios.get<Product>(`/loadProducts`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  });
  return response.data;
};

export const addProduct = async (data: AddProduct) => {
  const response = await axios.post<Product>("/product", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  });
  return response.data;
};

export const editProductAPI = async (data: EditProduct) => {
  const response = await axios.patch<Product>(
    `/product/${data.id}`,
    {
      name: data.name,
      price: data.price,
      quantity: data.quantity,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("access_token")}`,
      },
    }
  );
  return response.data;
};
