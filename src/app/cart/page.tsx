import Header from "@/components/header/Header";
import cart from "@/styles/cart.module.scss";
import icon from "@/styles/icons.module.scss";
import helper from "@/styles/helpers.module.scss";
import ProductCard from "@/app/cart/components/ProductCard";
import CartHeader from "@/app/cart/components/Header";

const Cart = () => {
  return (
    <>
      <Header/>
      <div className={cart.totalPrise}>
        <strong>سبد خرید</strong>
        <span className={cart.itemsCount}>(۷ آیتم )</span>
        <div>
          <small>جمع سبد خرید</small>
          <span className={cart.totalPriseNum}>
              ۲۳,۲۳۵,۰۰۰
            <small>
              تومان
            </small>
            </span>
        </div>
      </div>
      <main className={cart.body}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <div className={cart.fixBtnBackground}>
          <button className={helper.wideBtn}>ثبت سفارش</button>
        </div>
      </main>
    </>
  )
}

export default Cart;