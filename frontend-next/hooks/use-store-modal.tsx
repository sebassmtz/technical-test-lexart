import { Product } from "@/types/product";
import { create } from "zustand";

interface EditModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}
export const useStoreEditModal = create<EditModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

interface AddModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}
export const useStoreAddModal = create<AddModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

interface EditProductStore {
  productStore: Product;
  setProductStore: (product: Product) => void;
}

export const useStoreEditProduct = create<EditProductStore>((set) => ({
  productStore: {
    id: 0,
    name: "",
    price: 0,
    quantity: 0,
  },
  setProductStore: (product: Product) => set({ productStore: product }),
}));
