import React from "react";

const ProductCard = ({
  image,
  name,
  desc,
}: {
  image: string;
  name: string;
  desc: string;
}) => {
  return (
    <div className="bg-white px-3 py-5 rounded-xl flex flex-col items-center">
      <img
        src={image}
        alt=""
        className="h-44 w-68 mb-3 rounded-xl hover:scale-101 border-2 border-[#6e3b11]"
      />
      <p className="text-2xl font-semibold text-center mb-3">{name}</p>
      <p className="text-xs text-center mb-6 font-semibold sm:whitespace-nowrap">
        {desc}
      </p>
    </div>
  );
};

export default ProductCard;
