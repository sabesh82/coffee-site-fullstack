import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import handleError from "../helpers/handleError";

export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json({
      success: true,
      products,
    });
  } catch (error) {
    return handleError(error, "Failed to fetch products");
  }
}
