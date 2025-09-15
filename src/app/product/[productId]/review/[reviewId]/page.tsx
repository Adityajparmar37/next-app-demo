import { notFound } from "next/navigation";
import React from "react";

export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const { productId, reviewId } = params;

  if (parseInt(reviewId) > 1000) {
    return notFound();
  }

  return (
    <div>
      Review Details for Product {productId} - Review {reviewId}
    </div>
  );
}
