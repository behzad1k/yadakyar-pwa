"use client"
import { popupSlice } from '@/services/reducers';
import home from '@/styles/home.module.scss';
import { useDispatch } from 'react-redux';

export const Product = () => {
  const dispatch = useDispatch();
  return (
    <a onClick={() => dispatch(popupSlice.left(<p>hi</p>))}>
      <article className={home.product}>
        <div className={home.productImg}>
          <img src="/temp/product-test.png" alt="" />
        </div>
        <h2 className={home.productTitle}>
          لاستیک 195.65.15 یزد تایر گل مرکو fhjjj
        </h2>
        <span className={home.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
        <s className={home.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
        <span className={home.productDiscountPercent}>٪۳۰</span>
        <div>
          <span className={home.productTag}>ارسال فوری</span>
        </div>
      </article>
    </a>  );
};