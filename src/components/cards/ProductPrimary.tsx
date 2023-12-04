import { popupSlice } from "@/services/reducers";
import home from "@/styles/home.module.scss";
import tools from '@/utils/tools';
import Link from 'next/link';

export const ProductPrimary = ({
  title,
  price,
  img,
  discount,
  oldPrice,
  id
}: {
  title: string;
  price: number;
  img:string;
  discount: number;
  oldPrice: number;
  id: number;
}) => {
  console.log(discount);
  return (
    <Link href={`/product/${id}`} >
      <article className={home.product}>
        <div className={home.productImg}>
          <img src={img} alt="" />
        </div>
        <h2 className={home.productTitle}>{title}</h2>
        {discount > 0 ?
          <>
            <span className={home.productPrice}>{tools.formatPrice(price - discount)} تومان</span>
            <s className={home.productOldPrice}>{tools.formatPrice(price)} تومان</s>
            <span className={home.productDiscountPercent}>٪{tools.formatPrice(discount)}</span>
          </>
          :
          <span className={home.productPrice}>{tools.formatPrice(price)} تومان</span>
        }
        <div>
          <span className={home.productTag}>ارسال فوری</span>
        </div>
      </article>
    </Link>
  );
};