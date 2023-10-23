import home from "@/styles/home.module.scss";
import icon from "@/styles/icons.module.scss";

const Home = () => {
  return (
    <main className={home.main}>
      <div className={home.slider}>
        <img src="/temp/slider-temp.jpeg" alt="" />
      </div>
      <section className={home.topBanners}>
        <div className={home.topBanners1}>
          <a href="#">
            <img src="/temp/top-banner-1.jpeg" alt="" />
          </a>
        </div>
        <div className={home.topBanners2}>
          <a href="#">
            <img src="/temp/top-banner-2.jpeg" alt="" />
          </a>
        </div>
        <div className={home.topBanners3}>
          <a href="#">
            <img src="/temp/top-banner-3.jpeg" alt="" />
          </a>
        </div>
      </section>
      <section className={home.carousel}>
        <div className={home.carouselHead}>
          <span className={home.carouselTitle}>تخفیف دار‌‌ها</span>
          <span className={home.carouselTimer}>
            ۲۳:۵۰:۰۹
            <i className={icon.timer}></i>
          </span>
          <a className={home.carouselLink}>مشاهده همه</a>
        </div>
        <a href="#">
          <article className={home.product}>
            <div className={home.productImg}>
              <img src="/temp/product-test.png" alt="" />
            </div>
            <h2 className={home.productTitle}>
              لاستیک 195.65.15 یزد تایر گل مرکو fh
            </h2>
            <span className={home.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
            <s className={home.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
            <span className={home.productDiscountPercent}>٪۳۰</span>
            <div>
              <span className={home.productTag}>ارسال فوری</span>
            </div>
          </article>
        </a>
      </section>
      <div className={home.wideBanner}>
        <a href="#">
          <img src="/temp/wide-banner.png" alt="" />
        </a>
      </div>
      <section className={home.carousel}>
        <div className={home.carouselHead}>
          <span className={home.carouselTitle}>لاستیک</span>
          <a className={home.carouselLink}>مشاهده همه</a>
        </div>
        <a href="#">
          <article className={home.productSML}>
            <div className={home.productImg}>
              <img src="/temp/product-test.png" alt="" />
            </div>
            <div className={home.productSMLDetails}>
              <h2 className={home.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={home.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
            </div>
          </article>
        </a>
      </section>
      <section className={home.shortcuts}>
        <div className={home.shortcutsPartReq}>
          <a href="#">
            <i className={icon.sparePartBlue}></i>
            <span>سریع قیمت بگیر!</span>
            <p>کمتر از دو دقیقه اسم قطعه مورد نظرت رو بنویس تا بهت بگیم</p>
          </a>
        </div>
        <a href="#">
          <div className={home.shortcutsOverlayBtn}>
            <span>
              <img src="#" alt="" />
            </span>
            <span>روغن ماشین</span>
          </div>
        </a>
        <a href="#">
          <div className={home.shortcutsOverlayBtn}>
            <span>
              <img src="#" alt="" />
            </span>
            <span>روغن ماشین</span>
          </div>
        </a>
        <a href="#">
          <div className={home.shortcutsOverlayBtn}>
            <span>
              <img src="#" alt="" />
            </span>
            <span>روغن ماشین</span>
          </div>
        </a>
        <a href="#">
          <div className={home.shortcutsOverlayBtn}>
            <span>
              <img src="#" alt="" />
            </span>
            <span>روغن ماشین</span>
          </div>
        </a>
        <a href="#">
          <div className={home.shortcutsOverlayBtn}>
            <span>
              <img src="#" alt="" />
            </span>
            <span>روغن ماشین</span>
          </div>
        </a>
        <a href="#">
          <div className={home.shortcutsOverlayBtn}>
            <span>
              <img src="#" alt="" />
            </span>
            <span>روغن ماشین</span>
          </div>
        </a>
      </section>
      <section className={home.carousel}>
        <div className={home.carouselHead}>
          <span className={home.carouselTitle}>تخفیف دار‌‌ها</span>
          <a className={home.carouselLink}>مشاهده همه</a>
        </div>
        <a href="#">
          <article className={home.product}>
            <div className={home.productImg}>
              <img src="/temp/product-test.png" alt="" />
            </div>
            <h2 className={home.productTitle}>
              لاستیک 195.65.15 یزد تایر گل مرکو fh
            </h2>
            <span className={home.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
            <s className={home.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
            <span className={home.productDiscountPercent}>٪۳۰</span>
            <div>
              <span className={home.productTag}>ارسال فوری</span>
            </div>
          </article>
        </a>
      </section>
      <div className={home.wideBanner}>
        <a href="#">
          <img src="/temp/wide-banner.png" alt="" />
        </a>
      </div>
      <section className={home.carousel}>
        <div className={home.carouselHead}>
          <span className={home.carouselTitle}>تخفیف دار‌‌ها</span>
          <a className={home.carouselLink}>مشاهده همه</a>
        </div>
        <a href="#">
          <article className={home.product}>
            <div className={home.productImg}>
              <img src="/temp/product-test.png" alt="" />
            </div>
            <h2 className={home.productTitle}>
              لاستیک 195.65.15 یزد تایر گل مرکو fh
            </h2>
            <span className={home.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
            <s className={home.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
            <span className={home.productDiscountPercent}>٪۳۰</span>
            <div>
              <span className={home.productTag}>ارسال فوری</span>
            </div>
          </article>
        </a>
      </section>
      <section className={home.blog}>
        <div className={home.blog1}>
          <a href="#">
            <img src="/temp/blog-1.png" alt="" />
          </a>
        </div>
        <div className={home.blog2}>
          <a href="#">
            <img src="/temp/blog-2.png" alt="" />
          </a>
        </div>
        <div className={home.blog3}>
          <a href="#">
            <img src="/temp/blog-3.png" alt="" />
          </a>
        </div>
        <div className={home.blog4}>
          <span>مطالب بیشتر در مجله یدک یار</span>
          <a href="#">مجله یدک یار</a>
        </div>
      </section>
    </main>
  );
};

export default Home;
