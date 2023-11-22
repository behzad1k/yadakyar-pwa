import { popupSlice } from "@/services/reducers";
import home from "@/styles/home.module.scss";
import { useDispatch } from "react-redux";

export const ProductPrimary = ({
  title,
  price,
  img,
  discount,
  oldPrice,
  url,
  rateStar,
  reviews,
}: {
  title: string;
  price: number;
  img:string;
  discount: number;
  oldPrice: number;
  url:string
  rateStar: number;
  reviews: number;
}) => {
  // const dispatch = useDispatch();
  return (
    <a href={url}
      // onClick={() => dispatch(popupSlice.left(<p>hi</p>))}
                     >
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
    </a>
  );
};