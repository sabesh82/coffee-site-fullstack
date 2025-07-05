export const addToCart = async (
  apiClient: any,
  productId: string,
  quantity = 1
) => {
  try {
    const response = await apiClient.post("cart", { productId, quantity });
    return response.data.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error("Unauthorized");
    }
    throw error;
  }
};

export const getCartItems = async (apiClient: any) => {
  const response = await apiClient.get("cart");
  return response.data.data;
};

export const removeFromCart = async (apiClient: any, cartItemId: string) => {
  const response = await apiClient.delete(`cart?cartItemId=${cartItemId}`);
  return response.data.data;
};

export const updateCartQuantity = async (
  apiClient: any,
  cartItemId: string,
  quantity: number
) => {
  try {
    const response = await apiClient.patch(`cart/${cartItemId}`, { quantity });
    return response.data.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error("Unauthorized");
    }
    throw error;
  }
};
