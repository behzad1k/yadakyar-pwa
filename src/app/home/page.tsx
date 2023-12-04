import { ProductPrimary } from "@/components/cards/ProductPrimary";
import { popupSlice } from "@/services/reducers";
import { fetchData } from "@/app/home/builder";
import { Product } from "@/components/cards/Product";
import globalEnum from "@/enums/globalEnum";
import home from "@/styles/home.module.scss";
import icon from "@/styles/icons.module.scss";
import { useDispatch } from "react-redux";
import Banners from "./Banners";
import Blog from "./Blog";
import ProductSecondary from "@/components/cards/ProductSecondary";
import { ReactElement } from "react";
import HomeHeader from "@/components/header/HomeHeader";
import helper from "@/styles/helpers.module.scss";

const Home = async () => {
  const res = await fetchData(); // 300 ms

  let firstCarousel = res.data.all[0]["data"];

  const productsSecondary = [
    {
      title: "لاستیک 195.65.15 یزد تایر گل مرکو fh",
      price: 32200000,
      img: "/temp/product-test.png",
    },
    {
      title: "لاستیک 195.65.15 یزد تایر گل مرکو fh",
      price: 32200000,
      img: "/temp/product-test.png",
    },
    {
      title: "لاستیک 195.65.15 یزد تایر گل مرکو fh",
      price: 32200000,
      img: "/temp/product-test.png",
    },
    {
      title: "لاستیک 195.65.15 یزد تایر گل مرکو fh",
      price: 32200000,
      img: "/temp/product-test.png",
    },
  ];

  const firstCarouselList = (firstCarousel: any[]) => {
    const rows: ReactElement[] = [];

    firstCarousel.map((product: any) => {
      console.log(product);
      rows.push(
        <ProductPrimary
          title={product.title}
          price={product.chunk[0]?.price}
          img={product.image}
          discount={product.chunk[0]?.discount}
          oldPrice={product.oldPrice}
          id={product.id}
        />
      );
    });

    return rows;
  };

  const productsSecondaryList = () => {
    const rows: ReactElement[] = [];

    productsSecondary.map((product: any) => {
      rows.push(
        <ProductSecondary
          title={product.title}
          price={product.price}
          img={product.img}
          id={product.id}
          url={product.url}
        />
      );
    });

    return rows;
  };

  return (
    <>
      {/* <HomeHeader /> */}
      <main className={home.main}>
        {/* {bannerSlider.data.map((item: any) => */}
        {/*   <a key={item.id} href={item.url} className={home.slider} > */}
        {/*     <img src={item.image} alt={item.title} /> */}
        {/*   </a> */}
        {/* )} */}
        <Banners data={res.data?.all} />
        <section className={helper.carousel}>
          <div className={helper.carouselHead}>
            <span className={helper.carouselTitle}>تخفیف دار‌‌ها</span>
            <span className={helper.carouselTimer}>
              ۲۳:۵۰:۰۹
              <i className={icon.timer}></i>
            </span>
            <a className={helper.carouselLink}>مشاهده همه</a>
          </div>
          <div className={helper.carouselScroll}>
            {firstCarouselList(firstCarousel)}
          </div>
        </section>
        <div className={home.wideBanner}>
          <a href="#">
            <img src="/temp/wide-banner.png" alt="" />
          </a>
        </div>
        <section className={helper.carousel}>
          <div className={helper.carouselHead}>
            <span className={helper.carouselTitle}>لاستیک</span>
            <a className={helper.carouselLink}>مشاهده همه</a>
          </div>
          <div className={helper.carouselScroll}>{productsSecondaryList()}</div>
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
        <section className={helper.carousel}>
          <div className={helper.carouselHead}>
            <span className={helper.carouselTitle}>تخفیف دار‌‌ها</span>
            <a className={helper.carouselLink}>مشاهده همه</a>
          </div>
          <div className={helper.carouselScroll}></div>
        </section>
        <div className={home.wideBanner}>
          <a href="#">
            <img src="/temp/wide-banner.png" alt="" />
          </a>
        </div>
        <section className={helper.carousel}>
          <div className={helper.carouselHead}>
            <span className={helper.carouselTitle}>تخفیف دار‌‌ها</span>
            <a className={helper.carouselLink}>مشاهده همه</a>
          </div>
          <div className={helper.carouselScroll}></div>
        </section>
        <Blog />
      </main>
    </>
  );
};

export default Home;
