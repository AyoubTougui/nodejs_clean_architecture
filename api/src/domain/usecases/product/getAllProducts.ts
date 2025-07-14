import { ProductRepository } from "@infrastructure/repositories/ProductRepository";

export const getAllProducts = async () => {
  return ProductRepository.getAll();
};
