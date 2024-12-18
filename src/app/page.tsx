import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductList from '@/components/ProductList';
import Footer from '@/components/Footer';
import { Decimal } from '@prisma/client/runtime/library';
import { Product } from '@/lib/types';
import { Prisma as prisma } from '@/lib/prismaclient';

async function fetchProducts(): Promise<Product[]> {
  const productsFromDb = await prisma.products.findMany();

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

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className="flex flex-col justify-center items-center bg-folki-dark-grey gap-3 p-2">
      <Header />
      <Hero
        heroImageUrl="https://cdn.otavio.fun/folki/hero.png"
        heroText="Descontos de até 20% em toda a loja!"
        heroTitle="Super Promoção de Inauguração"
      />
      <ProductList products={products} />
      <Footer />
    </div>
  );
}