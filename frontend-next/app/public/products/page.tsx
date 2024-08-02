"use client";
import { CardWrapperMain } from "@/components/extras/card-main-wrapper";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/actions/products";
import { TablePreviewProducts } from "@/components/extras/table-products";
import dynamic from "next/dynamic";

// import { GridLoader } from "react-spinners";
const GridLoader = dynamic(
  () => import("react-spinners").then((mod) => mod.GridLoader),
  { ssr: false }
);

function ProductsPage() {
  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return (
    <CardWrapperMain
      headerLabel=""
      footerLabel="Products"
    >
      {isLoading ? (
        <div className="flex justify-center items-center">
          <GridLoader
            className="flex justify-center items-center"
            color="#000"
            size={80}
          />
        </div>
      ) : (
        <div className="flex flex-col space-y-2 w-full items-center justify-center overflow-y-auto max-h-[30vh] h-[60vh]">
          <TablePreviewProducts data={product ?? []} />
        </div>
      )}
      {error && <div>error.message</div>}
    </CardWrapperMain>
  );
}

export default ProductsPage;
