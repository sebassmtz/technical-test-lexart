"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";

import axios from "@/actions/conf";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const { email, name, password } = values;
  try {
    const response = await axios.post(
      "/register",
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return { success: "Create User Success" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error creating account. Please try again.",
    };
  }
};
