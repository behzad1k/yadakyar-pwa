import { ProductPrimary } from "@/components/cards/ProductPrimary";
import { fetchData } from "@/app/home/builder";
import globalEnum from '@/enums/globalEnum';
import home from "@/styles/home.module.scss";
import icon from "@/styles/icons.module.scss";
import Link from 'next/link';
import Blog from "./Blog";
import ProductSecondary from "@/components/cards/ProductSecondary";
import { ReactElement } from "react";
import helper from "@/styles/helpers.module.scss";

const Home = async () => {
  const res = await fetchData(); // 300 ms
  const banners = res.data.all.filter((media: any) => media.type === globalEnum.MediaType.banner);
  const sliders = res.data.all.filter((media: any) => media.type === globalEnum.MediaType.slide);

  const productsPrimaryList = (list: any[]) => {
    const rows: ReactElement[] = [];

    list.map((product: any) => {
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

  const productsSecondaryList = (list: any[]) => {
    const rows: ReactElement[] = [];

    list.map((product: any) => {
      rows.push(
        <ProductSecondary
          title={product.title}
          price={product.chunk[0]?.price}
          img={product.image}
          id={product.id}
        />
      );
    });

    return rows;
  };
  return (
    <>
      <main className={home.main}>
        <div className={home.slider}>
          <img src="/temp/slider-temp.jpeg" alt=""/>
        </div>
        <section className={home.topBanners}>
          <div className={home.topBanners1}>
            <a href="#">
              <img src={banners[0]?.data[0]?.image} alt=""/>
            </a>
          </div>
          <div className={home.topBanners2}>
            <a href="#">
              <img src={banners[2]?.data[0]?.image} alt=""/>
            </a>
          </div>
          <div className={home.topBanners3}>
            <a href="#">
              <img src={banners[1]?.data[0]?.image} alt=""/>
            </a>
          </div>
        </section>
        <section className={helper.carousel}>
          <div className={helper.carouselHead}>
            <span className={helper.carouselTitle}>{sliders[0]?.title}</span>
            <span className={helper.carouselTimer}>
              ۲۳:۵۰:۰۹
              <i className={icon.timer}></i>
            </span>
            <a className={helper.carouselLink}>مشاهده همه</a>
          </div>
          <div className={helper.carouselScroll}>
            {productsPrimaryList(sliders[0]?.data)}
          </div>
        </section>
        <div className={home.wideBanner}>
          <a href="#">
            <img src="/temp/wide-banner.png" alt="" />
          </a>
        </div>
        <section className={helper.carousel}>
          <div className={helper.carouselHead}>
            <span className={helper.carouselTitle}>{sliders[1].title}</span>
            <a className={helper.carouselLink}>مشاهده همه</a>
          </div>
          <div className={helper.carouselScroll}>{productsSecondaryList(sliders[1]?.data)}</div>
        </section>
        <section className={home.shortcuts}>
          <div className={home.shortcutsPartReq}>
            <Link href="/productReq">
              <i className={icon.sparePartBlue}></i>
              <span>سریع قیمت بگیر!</span>
              <p>کمتر از دو دقیقه اسم قطعه مورد نظرت رو بنویس تا بهت بگیم</p>
            </Link>
          </div>
          <div className={home.shortcut}>
          <a href="#">
            <div className={home.shortcutOverlayBtn}>
              <img src="/temp/test3.png" alt="" />
              <span>روغن ماشین</span>
            </div>
          </a>
          <a href="#">
            <div className={home.shortcutOverlayBtn}>
              <img src="/temp/test2.png" alt="" />
              <span>لاستیک</span>
            </div>
          </a>
          <a href="#">
            <div className={home.shortcutOverlayBtn}>
              <img src="/temp/test1.png" alt="" />
              <span>آیینه بغل</span>
            </div>
          </a>
          <a href="#">
            <div className={home.shortcutOverlayBtn}>
              <img src="/temp/test6.png" alt="" />
              <span>شمع</span>
            </div>
          </a>
          <a href="#">
            <div className={home.shortcutOverlayBtn}>
              <img src="/temp/test5.png" alt="" />
              <span>گیربکس</span>
            </div>
          </a>
          <a href="#">
            <div className={home.shortcutOverlayBtn}>
              <img src="/temp/test4.png" alt="" />
              <span>روکش صندلی</span>
            </div>
          </a>
          </div>
        </section>
        <section className={helper.carousel}>
          <div className={helper.carouselHead}>
            <span className={helper.carouselTitle}>{sliders[2]?.title}</span>
            <a className={helper.carouselLink}>مشاهده همه</a>
          </div>
          <div className={helper.carouselScroll}>
            {productsPrimaryList(sliders[2].data)}
          </div>
        </section>
        <div className={home.wideBanner}>
          <a href="#">
            <img src="/temp/wide-banner.png" alt="" />
          </a>
        </div>
        <section className={helper.carousel}>
          <div className={helper.carouselHead}>
            <span className={helper.carouselTitle}>{sliders[3]?.title}</span>
            <a className={helper.carouselLink}>مشاهده همه</a>
          </div>
          <div className={helper.carouselScroll}>
            {productsPrimaryList(sliders[3].data)}
          </div>
        </section>
        <Blog />
      </main>
    </>
  );
};

export default Home;
