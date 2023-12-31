import home from "@/styles/home.module.scss";
import tools from '@/utils/tools';
import Link from 'next/link';

const ProductSecondary = ({
  title,
  price,
  img,
  id
}: any) => {
  console.log(img);
  return (
    <Link href="#" >
      <article className={home.productSML}>
        <div className={home.productImg}>
          <img src={img} alt="" />
        </div>
        <div className={home.productSMLDetails}>
          <h2 className={home.productTitle}>{title}</h2>
          <span className={home.productPrice}>{tools.formatPrice(price)} </span>
        </div>
      </article>
    </Link>
  );
};

export default ProductSecondary;
