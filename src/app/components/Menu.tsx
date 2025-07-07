"use client";
import React, { useEffect, useState } from "react";
import MenuCard from "../layout/MenuCard";
import { useApi } from "@/providers/apiProvider";
import toast from "react-hot-toast";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

export default function Menu() {
  const { apiClient } = useApi();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await apiClient.get("products");
        setProducts(response.data.products);
      } catch (error) {
        toast.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [apiClient]);

  if (loading) return <p>Loading products...</p>;

  return (
    <section
      id="menu"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#b89b84] via-[#e9d7c3] to-[#fffaf3] pt-25 pb-15"
    >
      <div className="flex flex-col items-center px-5">
        <h1 className="text-5xl mb-8 font-semibold custom-metallic-text1">
          Our Menu
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <MenuCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
