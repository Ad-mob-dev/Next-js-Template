import { Metadata } from "next";

type Props = {
  params : {
    productId : string
  }
}

export const generateMetadata  = ({ params } : Props ) : Metadata => {
  return {
    title : `Product ${params.productId}`
  }
}

export default function ProductDetails({params} : Props) {
  return (
    <div className="h-[100vh] text-center to-blue-500">
      <h1 className="text-white">Product Details about product {params.productId}</h1>
    </div>
  );
}
