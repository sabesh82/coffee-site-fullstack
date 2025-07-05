"use client";
import toast from "react-hot-toast";
import { addToCart } from "@/services/cartService";
import { useApi } from "@/providers/apiProvider";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { apiClient } = useApi();

  const handleAddToCart = async () => {
    try {
      await addToCart(apiClient, product.id, 1);
      toast.success("Added to cart!");
    } catch (error: any) {
      const message =
        error?.response?.data?.error?.message || "Something went wrong";
      toast.error(message);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-600">${product.price}</p>

      <button
        onClick={handleAddToCart}
        className="mt-3 px-4 py-2 bg-[#4b2e2b] text-white rounded-lg hover:bg-[#573936] transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
