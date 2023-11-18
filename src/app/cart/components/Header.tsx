import Header from "@/components/header/Header";
import cart from "@/styles/cart.module.scss";

const CartHeader = () => {
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
    </>
  )
}

export default CartHeader;