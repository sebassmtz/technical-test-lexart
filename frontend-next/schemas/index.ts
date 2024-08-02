import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimun 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const EditProductSchema = z.object({
  name: z.optional(z.string()),
  price: z.optional(z.string()),
  quantity: z.optional(z.string()),
});

export const AddProductSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  price: z.string(),
  quantity: z.string(),
});
