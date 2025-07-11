import React from "react";
import ProductCard from "../layout/ProductLayout";

const Products = () => {
  const products = [
    {
      image:
        "https://res.cloudinary.com/dlseuftkj/image/upload/v1752235406/product1_f1wdny.jpg",
      name: "Lavazza",
      desc: "Rich Italian espresso blend, smooth & aromatic.",
    },
    {
      image:
        "https://res.cloudinary.com/dlseuftkj/image/upload/v1752235450/product2_tmccac.webp",
      name: "Nespresso",
      desc: "Premium coffee capsules for rich, barista-style espresso",
    },
    {
      image:
        "https://res.cloudinary.com/dlseuftkj/image/upload/v1752235459/product3_pkdln8.jpg",
      name: "Keurig",
      desc: "Fast, convenient single-serve coffee with bold flavors.",
    },
  ];
  return (
    <section
      id="products"
      className="w-full min-h-screen bg-gradient-to-r from-[#b89b84] via-[#e9d7c3] to-[#fffaf3] flex items-center justify-center pt-22 md:pt-10 pb-15"
    >
      <div className="flex flex-col items-center px-5">
        <div>
          <h1 className="text-3xl md:text-5xl mb-10 font-semibold custom-metallic-text1 text-center">
            Our Premium Products
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, key) => (
            <ProductCard key={key} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
