"use client";
import React, { useState } from "react";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TablePreviewProducts } from "@/components/extras/table-products";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteAllproducts,
  getAllProducts,
  loadProducts,
} from "@/actions/products";
import { useStoreAddModal } from "@/hooks/use-store-modal";
import { AlertModal } from "@/components/modal/alert-modal";
import { toast } from "sonner";
function ProductPageDash() {
  const { open: openAddModal } = useStoreAddModal((state) => ({
    open: state.open,
  }));

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const deleteProductMutation = useMutation({
    mutationFn: deleteAllproducts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Deleted all products successfully.");
      setOpen(false);
      setLoading(false);
    },
  });

  const loadProductsQuery = useMutation({
    mutationFn: loadProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Loaded products successfully.");
    },
  });

  const handleProducts = () => {
    queryClient.invalidateQueries({ queryKey: ["products"] });
    loadProductsQuery.mutate();
  };

  const onDelete = () => {
    setLoading(true);
    deleteProductMutation.mutate();
  };

  const handleDeleteProduct = () => {
    setOpen(true);
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <Card className="w-[800px]">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">Products</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-row items-center justify-center rounded-lg border p-3 shadow-md space-x-4">
            <Button onClick={() => openAddModal()}>Add Product</Button>
            <Button
              variant={"destructive"}
              onClick={handleDeleteProduct}
            >
              Delete All Products
            </Button>
            <Button
              variant={"green"}
              onClick={handleProducts}
            >
              Load Products
            </Button>
          </div>
          {error && <div>error.message</div>}
          {isLoading ? (
            <div className="justify-center items-center flex w-full h-full">
              Cargando ...
            </div>
          ) : (
            <div className="overflow-y-auto max-h-[40vh] h-[70vh]">
              <TablePreviewProducts
                data={product ?? []}
                showActions
              />
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}

export default ProductPageDash;
