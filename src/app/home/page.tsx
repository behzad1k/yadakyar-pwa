import { ProductPrimary } from "@/components/cards/ProductPrimary";
import { popupSlice } from "@/services/reducers";
import { fetchData } from '@/app/home/builder';
import { Product } from '@/components/cards/Product';
import globalEnum from '@/enums/globalEnum';
import home from "@/styles/home.module.scss";
import icon from "@/styles/icons.module.scss";
import { useDispatch } from "react-redux";
import Banners from "./Banners";
import Blog from "./Blog";
import ProductSecondary from "@/components/cards/ProductSecondary";
import { ReactElement } from "react";
import HomeHeader from "@/components/header/HomeHeader";

const Home = async () => {
  const res = await fetchData(); // 300 ms
  // const bannerSlider = res.data.all.filter((item: any) => item.type == globalEnum.MediaType.bannerSlider);

  const productsPrimary = [
    {
      title: "لاستیک 195.65.15 یزد تایر گل مرکو fh",
      img: "/temp/product-test.png",
      price: 55000000,
      discount: 25,
      oldPrice: 77000000,
      rateStar: 1,
      reviews: 23,
    },
    {
      title: "لاستیک 195.65.15 یزد تایر گل مرکو fh",
      img: "/temp/product-test.png",
      price: 55000000,
      discount: 25,
      oldPrice: 77000000,
      rateStar: 1,
      reviews: 23,
    },
    {
      title: "لاستیک 195.65.15 یزد تایر گل مرکو fh",
      img: "/temp/product-test.png",
      price: 55000000,
      discount: 25,
      oldPrice: 77000000,
      rateStar: 1,
      reviews: 23,
    },
    {
      title: "لاستیک 195.65.15 یزد تایر گل مرکو fh",
      img: "/temp/product-test.png",
      price: 55000000,
      discount: 25,
      oldPrice: 77000000,
      rateStar: 1,
      reviews: 23,
    },
  ];

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

  const productPrimaryList = (data: any[]) => {
    const rows: ReactElement[] = [];

    data.map((product: any) => {
      rows.push(
        <ProductPrimary
          title={product.title}
          price={product.price}
          img={product.img}
          discount={product.discount}
          oldPrice={product.oldPrice}
          rateStar={product.rateStar}
          reviews={product.reviews}
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
        />
      );
    });

    return rows;
  };


  return (
    <>
      <HomeHeader />
      <main className={home.main}>
      {/* {bannerSlider.data.map((item: any) => */}
      {/*   <a key={item.id} href={item.url} className={home.slider} > */}
      {/*     <img src={item.image} alt={item.title} /> */}
      {/*   </a> */}
      {/* )} */}
        <Banners />
        <section className={home.carousel}>
          <div className={home.carouselHead}>
            <span className={home.carouselTitle}>تخفیف دار‌‌ها</span>
            <span className={home.carouselTimer}>
              ۲۳:۵۰:۰۹
              <i className={icon.timer}></i>
            </span>
            <a className={home.carouselLink}>مشاهده همه</a>
          </div>
          {/* <div className={home.carouselScroll}>{productPrimaryList(productsPrimary)}</div> */}
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
          <div className={home.carouselScroll}>{productsSecondaryList()}</div>
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
          <div className={home.carouselScroll}>{productPrimaryList(productsPrimary)}</div>
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
          <div className={home.carouselScroll}>{productPrimaryList(productsPrimary)}</div>
        </section>
        <Blog />
      </main>
    </>
  );
};

export default Home;
