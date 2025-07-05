import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import privateRoute from "../../helpers/privateRoute";
import handleError from "../../helpers/handleError";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { cartItemId: string } }
) {
  return privateRoute(request, async (user) => {
    try {
      const { cartItemId } = params;
      const body = await request.json();
      const { quantity } = body;

      if (quantity < 1) {
        return NextResponse.json(
          {
            success: false,
            error: {
              code: "INVALID_QUANTITY",
              message: "Quantity must be at least 1",
            },
          },
          { status: 400 }
        );
      }

      const cartItem = await prisma.cartItem.findUnique({
        where: { id: cartItemId },
      });

      if (!cartItem || cartItem.userId !== user.id) {
        return NextResponse.json(
          {
            success: false,
            error: {
              code: "CART_ITEM_NOT_FOUND",
              message: "Cart item not found",
            },
          },
          { status: 404 }
        );
      }

      const updatedCartItem = await prisma.cartItem.update({
        where: { id: cartItemId },
        data: { quantity },
      });

      return NextResponse.json(
        {
          success: true,
          data: updatedCartItem,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleError(error, "Failed to update cart item quantity");
    }
  });
}
