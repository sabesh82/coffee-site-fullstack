import React from "react";
import ProductCard from "../layout/ProductLayout";

const Products = () => {
  const products = [
    {
      image: "/product1.jpg",
      name: "Lavazza",
      desc: "Rich Italian espresso blend, smooth & aromatic.",
    },
    {
      image: "/product2.jpg",
      name: "Nespresso",
      desc: "Premium coffee capsules for rich, barista-style espresso",
    },
    {
      image: "/product3.jpg",
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
          <h1 className="text-5xl mb-10 font-semibold text-[#4b2e2b] text-center">
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
