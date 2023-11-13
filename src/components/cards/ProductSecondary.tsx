import home from "@/styles/home.module.scss";

const ProductSecondary = ({
  title,
  price,
  img,
}: {
  title: string;
  price: number;
  img: string;
}) => {
  return (
    <a href="#">
      <article className={home.productSML}>
        <div className={home.productImg}>
          <img src={img} alt="" />
        </div>
        <div className={home.productSMLDetails}>
          <h2 className={home.productTitle}>{title}</h2>
          <span className={home.productPrice}>{price} تومان</span>
        </div>
      </article>
    </a>
  );
};

export default ProductSecondary;
