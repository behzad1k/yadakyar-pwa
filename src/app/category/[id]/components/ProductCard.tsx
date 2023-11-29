import { popupSlice } from "@/services/reducers";
import category from "@/styles/category.module.scss";
import Link from 'next/link';

export const ProductCard = ({
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
      <article className={category.product}>
        <div className={category.productImg}>
          <img src={img} alt="" />
        </div>
        <h2 className={category.productTitle}>{title}</h2>
        <span className={category.productPrice}>{price} تومان</span>
        <s className={category.productOldPrice}>{oldPrice} تومان</s>
        <span className={category.productDiscountPercent}>٪{discount}</span>
        <div>
          <span className={category.productTag}>ارسال فوری</span>
        </div>
      </article>
    </Link>
  );
};