import ProductCard from "../ProductCard";
import { Product } from "@/lib/types";

type ProductListProps = {
  products: Product[];
}

export default function ProductList(props: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1600]">
      {props.products.map((product) => (
        <ProductCard
          key={product.productId}
          productId={product.productId}
          productName={product.productName}
          productImageUrl={product.productImageUrl}
          productOldPrice={product.productOldPrice}
          productPrice={product.productPrice}
          uuid={product.slug}
        />
      ))}
    </div>
  );
}