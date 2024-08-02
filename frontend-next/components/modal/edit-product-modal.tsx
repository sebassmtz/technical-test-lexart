"use client";
import React, { useTransition, useState, useEffect } from "react";
import { Modal } from "@/components/ui/modal";
import {
  useStoreEditModal,
  useStoreEditProduct,
} from "@/hooks/use-store-modal";
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
import { Switch } from "@/components/ui/switch";

import { EditProductSchema } from "@/schemas";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { editProductAPI } from "@/actions/products";

function EditProductModal() {
  const queryClient = useQueryClient();

  const { isOpen, close } = useStoreEditModal((state) => ({
    isOpen: state.isOpen,
    close: state.close,
  }));

  const { productStore, setProductStore } = useStoreEditProduct((state) => ({
    productStore: state.productStore,
    setProductStore: state.setProductStore,
  }));

  const form = useForm<z.infer<typeof EditProductSchema>>({
    resolver: zodResolver(EditProductSchema),
    defaultValues: {
      name: productStore.name || "",
      price: String(productStore.price) || "",
      quantity: String(productStore.quantity) || "",
    },
  });

  useEffect(() => {
    // Reset form values when productStore changes
    form.reset({
      name: productStore.name || "",
      price: String(productStore.price) || "",
      quantity: String(productStore.quantity) || "",
    });
  }, [productStore, form]);

  const { isPending, mutate } = useMutation({
    mutationFn: editProductAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product updated successfully.");
      close();
    },
  });

  const onSubmit = (values: z.infer<typeof EditProductSchema>) => {
    const formattedValues = {
      ...values,
      price: Number(values.price),
      quantity: Number(values.quantity),
    };
    mutate({ ...formattedValues, id: productStore.id });
  };

  return (
    <Modal
      title="Edit Product"
      description="Edit the product details."
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
                      placeholder="price"
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
                      placeholder="quantity"
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
            Update
          </Button>
        </form>
      </Form>
    </Modal>
  );
}

export default EditProductModal;
