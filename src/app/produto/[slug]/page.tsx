import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Prisma as prisma } from '@/lib/prismaclient';
import { Decimal } from '@prisma/client/runtime/library';
import { formatPrice } from '@/lib/functions';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  
  const product = await prisma.products.findUnique({
    where: { slug: slug },
  });

  if (!product) {
    return (
      <div>
        Produto não encontrado...
      </div>
    );
  }

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
            {product.stock !== 0 ? <button className='bg-folki-purple p-3 pl-10 pr-10 rounded-[40] text-xl'>Adicionar ao Carrinho</button> : ''}
            {product.stock === 0 ? <p>Produto indisponível.</p>
            : product.stock === 1 ? <p>Última unidade disponível!</p>
            : <p>{product.stock} unidades disponíveis</p>}
          </div>       
        </div>
      </div>
      <div className='w-full max-w-[1600]'>
        <p className='whitespace-pre-line text-xl'>{product.specifications || 'N/A'}</p>
      </div>
      <Footer />
    </div>
  );
}
