"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "@/services/cartService";
import { useApi } from "@/providers/apiProvider";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface CartItem {
  id: string;
  quantity: number;
  product: Product;
}

export default function CartPage() {
  const { apiClient } = useApi();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { items } = await getCartItems(apiClient);
        setCartItems(items);
      } catch (error: any) {
        toast.error("Failed to load cart.");
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [apiClient]);

  const handleRemove = async (cartItemId: string) => {
    try {
      await removeFromCart(apiClient, cartItemId);
      setCartItems((prev) => prev.filter((item) => item.id !== cartItemId));
      toast.success("Item removed from cart");
    } catch (error) {
      toast.error("Failed to remove item");
    }
  };

  const handleQuantityChange = async (
    cartItemId: string,
    newQuantity: number
  ) => {
    try {
      const updated = await updateCartQuantity(
        apiClient,
        cartItemId,
        newQuantity
      );
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: updated.quantity }
            : item
        )
      );
    } catch (error) {
      toast.error("Failed to update quantity");
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );

  if (loading) return <p className="p-6">Loading cart...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 rounded object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.product.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                        className="px-2 py-1 text-sm bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 text-sm bg-gray-200 rounded cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      Price: ${item.product.price}
                    </p>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-sm text-red-600 hover:underline mt-1 cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="text-lg font-bold">
                  ${(item.quantity * item.product.price).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <div className="text-right mt-6 text-xl font-bold">
            Total: ${total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}
