export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface AddProduct {
  name: string;
  price: number;
  quantity: number;
}

export interface EditProduct {
  id: number;
  name?: string;
  price?: number;
  quantity?: number;
}
