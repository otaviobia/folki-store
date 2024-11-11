import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Decimal } from '@prisma/client/runtime/library';
import { formatPrice } from '@/lib/functions';
import { Prisma as prisma } from '@/lib/prismaclient';
import { Product } from '@/lib/types';
import ProductList from '@/components/ProductList';

interface ProductPageProps {
  params: {
    id: string;
  };
}

async function fetchProductsByCategory(category_id: number): Promise<Product[]> {
  const productsFromDb = await prisma.products.findMany({
    where: { category_id: category_id}
  });

  return productsFromDb.map((product) => ({
    productId: product.id,
    productName: product.name,
    productImageUrl: product.image_url ?? '',
    productOldPrice:
      product.discount_type === 'PERCENTAGE'
        ? Decimal.div(product.price, (1 - Number(product.discount_type) / 100))
        : product.discount_type === 'FIXED'
        ? Decimal.sum(product.price, product.discount_value ? product.discount_value : 0)
        : undefined,
    productPrice: product.price,
    slug: product.slug
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  
  const category = await prisma.categories.findUnique({
    where: { slug: id },
  });

  if (!category) {
    return (
      <div>
        Categoria não encontrada...
      </div>
    );
  }

  const products = await fetchProductsByCategory(category.id);

  return (
    <div className="flex flex-col justify-center items-center bg-folki-dark-grey gap-3 p-2">
      <Header />
      <ProductList products={products} />
      <Footer />
    </div>
  );
}