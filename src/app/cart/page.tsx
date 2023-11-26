"use client";
import Header from "@/components/header/Header";
import cart from "@/styles/cart.module.scss";
import icon from "@/styles/icons.module.scss";
import helper from "@/styles/helpers.module.scss";
import ProductCard from "@/app/cart/components/ProductCard";
import CartHeader from "@/app/cart/components/Header";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const Cart = () => {
  const products = [
    {
      title: "باند و بلندگو ماشین مدل PL501 مکسیدر - Maxeeder",
      img: "/temp/product-temp.png",
      price: "2300000",
    },
    {
      title: "باند و بلندگو ماشین مدل PL501 مکسیدر - Maxeeder",
      img: "/temp/product-temp.png",
      price: "2300000",
    },
    {
      title: "باند و بلندگو ماشین مدل PL501 مکسیدر - Maxeeder",
      img: "/temp/product-temp.png",
      price: "2300000",
    },
    {
      title: "باند و بلندگو ماشین مدل PL501 مکسیدر - Maxeeder",
      img: "/temp/product-temp.png",
      price: "2300000",
    },
  ];

  const productList = () => {
    const rows: ReactElement[] = [];
    products.map((product: any) => {
      rows.push(
        <ProductCard
          title={product.title}
          img={product.img}
          price={product.price}
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
        <span className={cart.itemsCount}>(۷ آیتم )</span>
        <div>
          <small>جمع سبد خرید</small>
          <span className={cart.totalPriseNum}>
            ۲۳,۲۳۵,۰۰۰
            <small>تومان</small>
          </span>
        </div>
      </div>
      <main className={cart.body}>
        {productList()}
        <div className={cart.fixBtnBackground}>
          <button
            className={helper.wideBtn}
            // onClick={() => router.push("/shipping")}
          >
            ثبت سفارش
          </button>
        </div>
      </main>
    </>
  );
};

export default Cart;
