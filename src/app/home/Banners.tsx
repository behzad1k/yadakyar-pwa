import home from "@/styles/home.module.scss";
import {fetchData} from '@/app/home/builder';

const Banners = ({data}: any) => {

  return (
    <>
      <div className={home.slider}>
        <img src="/temp/slider-temp.jpeg" alt=""/>
      </div>
      <section className={home.topBanners}>
        <div className={home.topBanners1}>
          <a href="#">
            <img src={banner1} alt=""/>
          </a>
        </div>
        <div className={home.topBanners2}>
          <a href="#">
            <img src={banner2} alt=""/>
          </a>
        </div>
        <div className={home.topBanners3}>
          <a href="#">
            <img src={banner3} alt=""/>
          </a>
        </div>
      </section>
      {" "}
    </>
  );
};

export default Banners;