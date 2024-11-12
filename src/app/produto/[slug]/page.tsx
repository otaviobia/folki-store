import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getProductBySlug } from '@/lib/prismaclient';
import { Decimal } from '@prisma/client/runtime/library';
import { formatPrice } from '@/lib/functions';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import AddToCartButton from '@/components/AddToCartButton';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  
  const product = await getProductBySlug(slug);

  if (!product) {
    return (
      <div>
        Produto não encontrado...
      </div>
    );
  }
  
  const prod_price: number = product.price.toNumber();

  return (
    <div className="flex flex-col justify-center items-center bg-folki-dark-grey gap-3 p-2">
      <Header />
      <div className='sm:flex w-full max-w-[1600] gap-3'>
        <div className='md:w-1/2 sm:w-full'>
          <img className='rounded-lg' src={product.image_url || '/default-product-image.jpg'} alt={product.name} />
        </div>
        <div className='md:w-1/2 sm:w-full bg-folki-grey rounded-lg p-6 md:p-12 flex flex-col justify-between'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-5xl'>{product.name}</h1>
            <div>
              {product.discount_type && (
                <p className='text-3xl text-folki-purple line-through'>
                  {product.discount_type === 'PERCENTAGE'
                    ? formatPrice(Decimal.div(product.price, Decimal.sub(1, Decimal.div(product.discount_value?product.discount_value:0, 100))))
                    : product.discount_type === 'FIXED'
                    ? formatPrice(Decimal.sum(product.price, product.discount_value?product.discount_value:0))
                    : ''}
                </p>
              )}
              <p className='text-4xl'>{formatPrice(product.price)}</p>
            </div>
            <p className='text-2xl'>{product.description}</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            {product.stock !== 0 ? <AddToCartButton id={product.id} name={product.name} price={prod_price} /> : ''}
            {product.stock === 0 ? <p>Produto indisponível.</p>
            : product.stock === 1 ? <p>Última unidade disponível!</p>
            : <p>{product.stock} unidades disponíveis</p>}
          </div>     
        </div>
      </div>
      {product.specifications && 
      <div className='w-full max-w-[1600] p-6 bg-folki-grey rounded-lg'>
        <div className="prose prose-lg max-w-none">
          <Markdown remarkPlugins={[remarkGfm]}>{product.specifications}</Markdown>
        </div>
      </div>}
      <Footer />
    </div>
  );
}