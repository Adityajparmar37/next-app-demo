import React from "react";

export default function ReviewList({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  return (
    <div>
      <div>Review 1 for Product {productId}</div>
      <div>Review 2 for Product {productId}</div>
      <div>Review 3 for Product {productId}</div>
    </div>
  );
}
