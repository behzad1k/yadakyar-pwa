import cart from "@/styles/cart.module.scss";
import icon from "@/styles/icons.module.scss";

const ProductCard = () => {
  return(
    <article className={cart.productCard}>
      <div className={cart.productCardDetails}>
            <span className={cart.productCardTitle}>
              باند و بلندگو ماشین مدل PL501 مکسیدر -  Maxeeder
            </span>
        <span className={cart.productCardPrice}>
              ۲۳,۲۰۰,۰۰۰ تومان
            </span>
        <div className={cart.productCardFunc}>
          <div>
            <i className={icon.plusBlackSmall}/>
            <input type="number" placeholder="..."/>
            <i className={icon.minus}/>
          </div>
          <span>حذف کالا</span>
        </div>
      </div>
      <div className={cart.productCardImg}>
        <img src="/temp/product-temp.png" alt=""/>
      </div>
    </article>
  )
}

export default ProductCard;