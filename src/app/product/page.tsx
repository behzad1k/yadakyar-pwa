import product from "@/styles/product.module.scss";
import icon from "@/styles/icons.module.scss";

const Product = () => {
  return (
    <main className={product.main}>
      <section className={product.info}>
        <h1>باند و بلندگو ماشین مدل PL501 مکسیدر - Maxeeder</h1>
        <div>
          <img src="/temp/product-temp.png" alt="" />
        </div>
        <small>سیستم صوتی / باند و بلندگو</small>
        <div className={product.infoColor}>
          <span>رنگ:</span>
          <span>نقره ای مات (ساتن)</span>
          <label className={product.infoColorSelected}>
            <input type="radio" />
          </label>
          <label >
            <input type="radio" />
          </label>
          <label >
            <input type="radio" />
          </label>
          <label >
            <input type="radio" />
          </label>
        </div>
        <div className={product.infoAttribute}>
          <span>سایز:</span>
          <label className={product.infoAttributeSelected}>۱۲ سانتی متر</label>
          <label>۱۲ سانتی متر</label>
          <label>۱۲ سانتی متر</label>
          <label>۱۲ سانتی متر</label>
          <label>۱۲ سانتی متر</label>
        </div>
        <div>
          <strong></strong>
          <p></p>
        </div>
      </section>
      <section className={product.similar}>
        <strong></strong>
        <article></article>
      </section>
      <section className={product.comments}></section>
    </main>
  );
};

export default Product;
