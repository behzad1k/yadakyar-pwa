import Header from "@/components/header/Header";
import profile from "@/styles/profile.module.scss";
import icon from "@/styles/icons.module.scss";

const Favorites = () => {
  return (
    <>
      <Header/>
      <main className={profile.noPaddingBody}>
        <div className={profile.favoritesTop}>
          <span>علاقه مندی ها</span>
          <span>
            <i className={icon.trash}/>
            حذف همه
          </span>
        </div>
        <section className={profile.favoritesList}>
          <div className={profile.favoritesCard}>
            <div className={profile.favoritesCardDetail}>
              <span>باند و بلندگو ماشین مدل PL501 مکسیدر - Maxeeder</span>
              <span className={profile.favoritesCardPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <div className={profile.favoritesCardBtn}>
                <i className={icon.trashGray}/>
                <span>افزودن به سبد</span>
              </div>
            </div>
            <div className={profile.favoritesCardImg}>
              <img src="/temp/product-temp.png" alt=""/>
            </div>
          </div>
          <div className={profile.favoritesCard}>
            <div className={profile.favoritesCardDetail}>
              <span>باند و بلندگو ماشین مدل PL501 مکسیدر - Maxeeder</span>
              <span className={profile.favoritesCardPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <div className={profile.favoritesCardBtn}>
                <i className={icon.trashGray}/>
                <span>افزودن به سبد</span>
              </div>
            </div>
            <div className={profile.favoritesCardImg}>
              <img src="/temp/product-temp.png" alt=""/>
            </div>
          </div>
          <div className={profile.favoritesCard}>
            <div className={profile.favoritesCardDetail}>
              <span>باند و بلندگو ماشین مدل PL501 مکسیدر - Maxeeder</span>
              <span className={profile.favoritesCardPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <div className={profile.favoritesCardBtn}>
                <i className={icon.trashGray}/>
                <span>افزودن به سبد</span>
              </div>
            </div>
            <div className={profile.favoritesCardImg}>
              <img src="/temp/product-temp.png" alt=""/>
            </div>
          </div>
          <div className={profile.favoritesCard}>
            <div className={profile.favoritesCardDetail}>
              <span>باند و بلندگو ماشین مدل PL501 مکسیدر - Maxeeder</span>
              <span className={profile.favoritesCardPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <div className={profile.favoritesCardBtn}>
                <i className={icon.trashGray}/>
                <span>افزودن به سبد</span>
              </div>
            </div>
            <div className={profile.favoritesCardImg}>
              <img src="/temp/product-temp.png" alt=""/>
            </div>
          </div>
          <div className={profile.favoritesCard}>
            <div className={profile.favoritesCardDetail}>
              <span>باند و بلندگو ماشین مدل PL501 مکسیدر - Maxeeder</span>
              <span className={profile.favoritesCardPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <div className={profile.favoritesCardBtn}>
                <i className={icon.trashGray}/>
                <span>افزودن به سبد</span>
              </div>
            </div>
            <div className={profile.favoritesCardImg}>
              <img src="/temp/product-temp.png" alt=""/>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}

export default Favorites;