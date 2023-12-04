"use client";
import Header from "@/components/header/Header";
import { useAppSelector } from '@/services/store';
import helper from "@/styles/helpers.module.scss";
import cart from "@/styles/cart.module.scss";
import ProductCard from "@/app/cart/components/ProductCard";
import tools from '@/utils/tools';
import { useRouter } from 'next/navigation';
import { ReactElement } from 'react';

const Cart = () => {
  const cartReducer = useAppSelector(state => state.cartReducer.cart);
  const router = useRouter();

  const productList = () => {
    const rows: ReactElement[] = [];
    cartReducer?.basket?.map((product: any) => {
      product?.gallery && rows.push(
        <ProductCard
          title={product.title}
          img={product?.gallery[0]?.original}
          price={product.price}
          stock={product.stock}
          chunk={product.chunk}
        />
      );
    });
    return rows;
  };

  return (
    <>
      <Header />
      <div className={cart.totalPrise}>
        <strong>سبد خرید</strong>
        <span className={cart.itemsCount}>({cartReducer?.totalProduct} آیتم )</span>
        <div>
          <small>جمع سبد خرید</small>
          <span className={cart.totalPriseNum}>
            {tools.formatPrice(cartReducer?.sumProductPrice)}
            <small>تومان</small>
          </span>
        </div>
      </div>
      <main className={cart.body}>
        {productList()}
        <div className={cart.fixBtnBackground}>
          <button
            className={helper.wideBtn}
            onClick={() => router.push("/shipping")}
          >
            ثبت سفارش
          </button>
        </div>
      </main>
    </>
  );
};

export default Cart;
