import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import privateRoute from "../helpers/privateRoute";
import handleError from "../helpers/handleError";
import { addToCartSchema } from "@/schemas/cart.schema";

export async function POST(request: NextRequest) {
  return privateRoute(request, async (user) => {
    try {
      const body = await request.json();
      const data = addToCartSchema.parse(body);

      const product = await prisma.product.findUnique({
        where: { id: data.productId },
      });

      if (!product) {
        return NextResponse.json(
          {
            success: false,
            error: {
              code: "PRODUCT_NOT_FOUND",
              message: "Product not found",
            },
          },
          { status: 404 }
        );
      }

      const existing = await prisma.cartItem.findFirst({
        where: {
          userId: user.id,
          productId: data.productId,
        },
      });

      const cartItem = existing
        ? await prisma.cartItem.update({
            where: { id: existing.id },
            data: { quantity: existing.quantity + (data.quantity || 1) },
          })
        : await prisma.cartItem.create({
            data: {
              userId: user.id,
              productId: data.productId,
              quantity: data.quantity || 1,
            },
          });

      return NextResponse.json(
        {
          success: true,
          data: cartItem,
        },
        { status: 200 }
      );
    } catch (error) {
      return handleError(error, "Failed to add item to cart");
    }
  });
}

export async function GET(request: NextRequest) {
  return privateRoute(request, async (user) => {
    try {
      const [items, count] = await prisma.$transaction([
        prisma.cartItem.findMany({
          where: { userId: user.id },
          include: { product: true },
        }),
        prisma.cartItem.count({
          where: { userId: user.id },
        }),
      ]);

      return NextResponse.json(
        {
          success: true,
          data: { items, total: count },
        },
        { status: 200 }
      );
    } catch (error) {
      return handleError(error, "Failed to fetch cart items");
    }
  });
}

export async function DELETE(request: NextRequest) {
  return privateRoute(request, async (user) => {
    try {
      const url = new URL(request.url);
      const cartItemId = url.searchParams.get("cartItemId");

      if (!cartItemId) {
        return NextResponse.json(
          {
            success: false,
            error: {
              code: "CART_ITEM_ID_REQUIRED",
              message: "Cart item ID is required",
            },
          },
          { status: 400 }
        );
      }

      const existingItem = await prisma.cartItem.findUnique({
        where: { id: cartItemId },
      });

      if (!existingItem || existingItem.userId !== user.id) {
        return NextResponse.json(
          {
            success: false,
            error: {
              code: "NOT_FOUND",
              message: "Cart item not found or not yours",
            },
          },
          { status: 404 }
        );
      }

      await prisma.cartItem.delete({
        where: { id: cartItemId },
      });

      return NextResponse.json(
        {
          success: true,
          data: { message: "Item deleted successfully" },
        },
        { status: 200 }
      );
    } catch (error) {
      return handleError(error, "Failed to delete cart item");
    }
  });
}
