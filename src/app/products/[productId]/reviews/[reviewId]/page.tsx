"use client";
import { notFound } from "next/navigation";


export default function Review({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {

  function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
  }

  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error(`Error Loading review page`);
  }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <h1 className={`text-white`}>
      Showing Review Id {params.reviewId} of product Id {params.productId}
    </h1>
  );
}
