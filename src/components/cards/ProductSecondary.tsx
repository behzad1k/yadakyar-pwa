import home from "@/styles/home.module.scss";
import Link from 'next/link';

const ProductSecondary = ({
  title,
  price,
  img,
  id
}: {
  title: string;
  price: number;
  img: string;
  id: number;
}) => {
  console.log(img);
  return (
    <Link href={`/product/${id}`} >
      <article className={home.productSML}>
        <div className={home.productImg}>
          <img src={img} alt="" />
        </div>
        <div className={home.productSMLDetails}>
          <h2 className={home.productTitle}>{title}</h2>
          <span className={home.productPrice}>{price} تومان</span>
        </div>
      </article>
    </Link>
  );
};

export default ProductSecondary;
