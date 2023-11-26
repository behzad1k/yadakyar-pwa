import cart from "@/styles/cart.module.scss";
import icon from "@/styles/icons.module.scss";

const ProductCard = ({ title, img, price }: any) => {
  return (
    <article className={cart.productCard}>
      <div className={cart.productCardDetails}>
        <span className={cart.productCardTitle}>{title}</span>
        <span className={cart.productCardPrice}>{price} تومان</span>
        <div className={cart.productCardFunc}>
          <div>
            <i className={icon.plusBlackSmall} />
            <input type="number" placeholder="..." />
            <i className={icon.minus} />
          </div>
          <span>حذف کالا</span>
        </div>
      </div>
      <div className={cart.productCardImg}>
        <img src={img} alt="" />
      </div>
    </article>
  );
};

export default ProductCard;
