import { popupSlice } from "@/services/reducers";
import home from "@/styles/home.module.scss";
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
  return (
    <Link href={`/product/${id}`} >
      <article className={home.product}>
        <div className={home.productImg}>
          <img src={img} alt="" />
        </div>
        <h2 className={home.productTitle}>{title}</h2>
        <span className={home.productPrice}>{price} تومان</span>
        <s className={home.productOldPrice}>{oldPrice} تومان</s>
        <span className={home.productDiscountPercent}>٪{discount}</span>
        <div>
          <span className={home.productTag}>ارسال فوری</span>
        </div>
      </article>
    </Link>
  );
};