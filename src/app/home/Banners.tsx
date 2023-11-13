import home from "@/styles/home.module.scss";

const Banners = () => {
  return (
    <>
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
      </section>{" "}
    </>
  );
};

export default Banners;