import Link from "next/link";
import { formatPrice } from "@/lib/functions";
import { Decimal } from "@prisma/client/runtime/library";

type ProductCardProps = {
  productId: number;
  productName: string;
  productImageUrl: string;
  productOldPrice?: Decimal;
  productPrice: Decimal;
  uuid: string;
};

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className="bg-folki-grey rounded-lg w-96 h-auto">
      <Link href={`/produto/${props.uuid}`}>
        <img className="rounded-t-lg" src={props.productImageUrl} alt={props.productName} width={500} height={500}/>
      </Link>
      <div className="p-3 flex flex-col justify-between h-36">
      <Link href={`/produto/${props.uuid}`}>
        <p className="font-semibold text-lg text-ellipsis line-clamp-2 pb-4">{props.productName}</p>
      </Link>
        {props.productOldPrice != undefined && 
        <p className="text-folki-purple text-lg text-right line-through">{formatPrice(props.productOldPrice)}</p>
        }
        <p className="text-xl text-right">{formatPrice(props.productPrice)}</p>
      </div>
    </div>
  )
}