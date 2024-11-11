import { Decimal } from "@prisma/client/runtime/library";

export function formatPrice(price: Decimal): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(price));
}