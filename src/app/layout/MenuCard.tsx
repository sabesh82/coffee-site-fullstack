"use client";

import React from "react";
import { IoCart } from "react-icons/io5";
import { addToCart } from "@/services/cartService";
import { useApi } from "@/providers/apiProvider";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface MenuCardProps {
  product: Product;
}

export default function MenuCard({ product }: MenuCardProps) {
  const { apiClient } = useApi();
  const router = useRouter();

  const handleAddToCart = async () => {
    try {
      await addToCart(apiClient, product.id, 1);
      toast.success(`Added ${product.name} to cart!`);
    } catch (error: any) {
      if (error.message === "Unauthorized") {
        toast.error("Please login first to add items to your cart!");
        router.push("/login");
      } else {
        toast.error("Failed to add to cart");
      }
    }
  };

  return (
    <div className="p-3 bg-white flex flex-col rounded-xl">
      <img
        src={product.image}
        alt={product.name}
        className="h-42 w-60 mb-4 rounded-xl hover:scale-101"
      />
      <p className="text-2xl font-semibold">{product.name}</p>

      {/*buttons*/}
      <div className="flex mt-2 items-center justify-between">
        <div className="flex gap-2">
          <p className="text-md text-[#281402]">Regular | </p>
          <p className="text-md text-[#281402]">price: ${product.price}</p>
        </div>
        {/*cart section*/}
        <div
          onClick={handleAddToCart}
          className="bg-[#e6ab7b] p-2 rounded-2xl text-xl hover:bg-[#b48966] border-2 border-[#8e4306] transition duration-150 cursor-pointer"
          role="button"
          aria-label={`Add ${product.name} to cart`}
        >
          <IoCart />
        </div>
      </div>
    </div>
  );
}
