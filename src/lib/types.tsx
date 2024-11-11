import { Decimal } from "@prisma/client/runtime/library";

export type Product = {
  productId: number;
  slug: string;
  productName: string;
  productDescription?: string;
  productSpecifications?: string;
  productImageUrl: string;
  productPrice: Decimal;
  productOldPrice?: Decimal;
};