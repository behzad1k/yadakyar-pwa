import home from "@/styles/home.module.scss";
import {fetchData} from '@/app/home/builder';

const Banners = ({data}: any) => {
  let banner1 = null;
  if (data[1]) {
    banner1 = data[1]["data"][0]?.image;
  }

  let banner2 = null;
  if (data[2]) {
    banner2 = data[2]["data"][0]?.image;
  }

  let banner3 = null;
  if (data[3]) {
    banner3 = data[3]["data"][0]?.image;
  }

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