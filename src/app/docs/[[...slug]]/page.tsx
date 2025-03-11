import React from "react";

export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    return (
      <div className="h-[100vh] text-center to-blue-500">
        <h1 className="text-white">
          Viewing Docs for item {params.slug[0]} and concept {params.slug[1]}
        </h1>
      </div>
    );
  } else if (params.slug?.length === 1) {
    return (
      <div className="h-[100vh] text-center to-blue-500">
        <h1 className="text-white">
          Viewing Docs for item ' {params.slug[0]} '
        </h1>
      </div>
    );
  }
  return  <div className="h-[100vh] text-center bg-teal-950">
  <h1 className="p-4 text-center mt-96 text-white">Docs</h1>
 </div>;
}
