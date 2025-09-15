import React from "react";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  return <div>Product Details for {productId}</div>;
}
