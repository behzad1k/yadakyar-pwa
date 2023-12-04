import Form from "@/app/product/components/Form";
import Back from "@/components/helpers/back";
import product from "@/styles/product.module.scss";
import icon from "@/styles/icons.module.scss";
import helper from "@/styles/helpers.module.scss";
import { fetchData } from "@/app/product/[id]/builder";
import ProductSecondary from "@/components/cards/ProductSecondary";
import { ReactElement } from "react";

const Product = async ({ params }: { params: { id: number } }) => {
  const res = await fetchData(params.id);
  const prod = res.data;

  const breadCrumbs = prod.breadCrumbs;

  // let productColor = [prod.options[0]];
  const productDesc = prod.content.htmlText;
  const relatedProducts = prod.related;

  const relatedProductsList = () => {
    const rows: ReactElement[] = [];

    prod.related?.map((product: any) => {
      rows.push(
        <ProductSecondary
          title={product.title}
          price={product.chunk[0].price}
          img={product.image}
          url={product.url}
          id={product.id}
        />
      );
    });

    return rows;
  };

  const productPrice = res.data.chunk[0].price;

  return (
    <main className={product.main}>
      {/* todo: header */}
      <div className={product.head}>
        <Back>
          <i className={icon.close} />
        </Back>
        <i className={icon.share} />
      </div>
      <section className={product.info}>
        <h1>{res.data.content.title}</h1>
        <div>
          <img src={prod.content.gallery[0]?.original} alt="" />
        </div>
        <small>{breadCrumbs.join(" / ")}</small>
        <Form product={{ ...prod, id: params.id }} chunk={prod.chunk} />
        <div className={helper.dropdown}>
          <input type="checkbox" id="dropdownInput1" />
          <label htmlFor="dropdownInput1">
            <strong>درباره محصول</strong>
          </label>
          <div className={helper.dropdownContent}>{/* {res.} */}</div>
        </div>
        <div className={helper.dropdown}>
          <input type="checkbox" id="dropdownInput2" />
          <label htmlFor="dropdownInput2">
            <strong>مشخصات فنی</strong>
          </label>
          <div>{productDesc}</div>
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
          {relatedProductsList()}
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
    </main>
  );
};

export default Product;
