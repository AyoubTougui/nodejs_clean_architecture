import { getAllProducts } from "@domain/usecases/product/getAllProducts";
import { Request, Response } from "express";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await getAllProducts();
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error:
        error.message ||
        "An unexpected error occurred while fetching the products.",
    });
  }
};
