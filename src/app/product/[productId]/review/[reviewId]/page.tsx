import React from "react";

export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const { productId, reviewId } = params;
  return (
    <div>
      Review Details for Product {productId} - Review {reviewId}
    </div>
  );
}
