import product from "@/styles/product.module.scss";
import icon from "@/styles/icons.module.scss";
import helper from "@/styles/helpers.module.scss";
import { fetchData } from "@/app/product/builder";
import { log } from "console";
import ProductSecondary from "@/components/cards/ProductSecondary";
import { ReactElement } from "react";

const Product = async () => {
  const res = await fetchData();

  let productTitle = null;
  if (res.data.content.title) {
    productTitle = res.data.content.title;
  }

  // let productColor = [res.data.options[0]];
  let productDesc = res.data.content.htmlText;
  let relatedProducts = res.data.related;
  console.log(relatedProducts);

  const relatedProductsList = (relatedProducts: any[]) => {
    const rows: ReactElement[] = [];

    relatedProducts.map((product: any) => {
      rows.push(
        <ProductSecondary
          title={product.title}
          price={product.chunk[0].price}
          img={product.image}
          url={product.url}
        />
      );
    });

    return rows;
  };

  const productPrice = res.data.chunk[0].price

  return (
    <main className={product.main}>
      <section className={product.info}>
        <h1>{productTitle}</h1>
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
          <label>
            <input type="radio" />
          </label>
          <label>
            <input type="radio" />
          </label>
          <label>
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
        <div className={helper.dropdown}>
          <input type="checkbox" id="dropdownInput1" />
          <label htmlFor="dropdownInput1">
            <strong>درباره محصول</strong>
          </label>
          <div className={helper.dropdownContent}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </div>
        </div>
        <div className={helper.dropdown}>
          <input type="checkbox" id="dropdownInput2" />
          <label htmlFor="dropdownInput2">
            <strong>مشخصات فنی</strong>
          </label>
          {/* <div>{productDesc}</div> */}
          <div
            className={helper.dropdownContent}
            dangerouslySetInnerHTML={{ __html: productDesc }}
          ></div>
        </div>
      </section>
      <section className={helper.carousel}>
        <div className={helper.carouselHead}>
          <span className={helper.carouselTitle}>محصولات مشابه</span>
        </div>
        <div className={helper.carouselScroll}>
          {relatedProductsList(relatedProducts)}
        </div>
      </section>
      <section className={helper.carousel}>
        <div className={helper.carouselHead}>
          <span className={helper.carouselTitle}>
            نظرات کاربران <small>(23)</small>
          </span>
          <div className={helper.rating}>
            <div className={helper.ratings}>
              <div className={helper.emptyStars}></div>
              <div className={helper.fullStars} style={{ width: "87%" }}></div>
            </div>
          </div>
          <span className={product.addCommentBtn}>ثبت نظر</span>
        </div>
        <div className={product.ratingDetail}>
          <div>
            <span>۱۱۲۳</span>
            <span className={product.ratingDetailChart}>
              <span
                className={product.ratingDetailChartFill}
                style={{ width: "10%" }}
              ></span>
            </span>
            <span>۵ ستاره</span>
          </div>
          <div>
            <span>۱۱۲۳</span>
            <span className={product.ratingDetailChart}>
              <span
                className={product.ratingDetailChartFill}
                style={{ width: "10%" }}
              ></span>
            </span>
            <span>۴ ستاره</span>
          </div>
          <div>
            <span>۱۱۲۳</span>
            <span className={product.ratingDetailChart}>
              <span
                className={product.ratingDetailChartFill}
                style={{ width: "10%" }}
              ></span>
            </span>
            <span>۳ ستاره</span>
          </div>
          <div>
            <span>۱۱۲۳</span>
            <span className={product.ratingDetailChart}>
              <span
                className={product.ratingDetailChartFill}
                style={{ width: "10%" }}
              ></span>
            </span>
            <span>۲ ستاره</span>
          </div>
          <div>
            <span>۳</span>
            <span className={product.ratingDetailChart}>
              <span
                className={product.ratingDetailChartFill}
                style={{ width: "10%" }}
              ></span>
            </span>
            <span>۱ ستاره</span>
          </div>
        </div>
        <div className={helper.carouselScroll}>
          <article className={helper.commentCard}>
            <div className={helper.commentCardHead}>
              <div className={helper.rating}>
                <div className={helper.ratings}>
                  <div className={helper.emptyStars}></div>
                  <div
                    className={helper.fullStars}
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </div>
              <div>۱۴۰۲/۰۲/۱۴</div>
            </div>
            <strong>خوب بود</strong>
            <p>
              از نظر کیفیتی خوب بود من قبلا استفاده کردم ولی نسبت به سال
              گذشتهاقزایش قیمت داشته
            </p>
            <span>محمد جلیلی</span>
            <div className={helper.commentCardReaction}>
              {/* active class = likeActive , disLikeActive */}
              <input type="checkbox" id="like" />
              <input type="checkbox" id="disLike" />
              <div>
                <span>0</span>
                <label className={helper.commentLike} htmlFor="like">
                  <i className={icon.like} />
                </label>
              </div>
              <div>
                <span>0</span>
                <label htmlFor="disLike">
                  <i className={icon.disLike} />
                </label>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className={product.fixBtnBackground}>
        <button className={product.addToCartBtn}>افزودن به سبد خرید</button>
        <div className={product.priceBox}>
          <span>{productPrice} تومان</span>
          <s>۲۳,۲۰۰,۰۰۰ تومان</s>
        </div>
      </div>
    </main>
  );
};

export default Product;
