"use client";
import React, { useTransition, useState } from "react";
import { Modal } from "@/components/ui/modal";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { AddProductSchema } from "@/schemas";
import { useStoreAddModal } from "@/hooks/use-store-modal";
import { Switch } from "@/components/ui/switch";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "@/actions/products";
import { toast } from "sonner";

function AddProductModal() {
  const queryClient = useQueryClient();
  const { isOpen, close } = useStoreAddModal((state) => ({
    isOpen: state.isOpen,
    close: state.close,
  }));

  const form = useForm<z.infer<typeof AddProductSchema>>({
    resolver: zodResolver(AddProductSchema),
    defaultValues: {
      name: "",
      price: "",
      quantity: "",
    },
  });


  const { isPending, mutate } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product added successfully.");
      form.reset();
      close();
    },
  });

  const onSubmit = (values: z.infer<typeof AddProductSchema>) => {
    const formattedValues = {
      ...values,
      price: Number(values.price),
      quantity: Number(values.quantity),
    };
    mutate(formattedValues);
  };

  return (
    <Modal
      title="Add Product"
      description="Add a new product to the store."
      isOpen={isOpen}
      onClose={close}
    >
      <Form {...form}>
        <form
          className="space-y-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="product"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            disabled={isPending}
          >
            Add
          </Button>
        </form>
      </Form>
    </Modal>
  );
}

export default AddProductModal;