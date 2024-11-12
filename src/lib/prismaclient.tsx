import { PrismaClient, Products } from "@prisma/client";

export const Prisma = new PrismaClient();

export const getProductBySlug = async (slug: string): Promise<Products | null> => {
  return await Prisma.products.findUnique({
    where: { slug: slug },
  });
};

export const getProductById = async (id: number): Promise<Products | null> => {
  return await Prisma.products.findUnique({
    where: { id: id },
  });
};
