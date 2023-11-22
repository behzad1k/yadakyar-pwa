import TitleHeader from "@/components/header/TitleHeader";
import icon from "@/styles/icons.module.scss";
import profile from "@/styles/profile.module.scss";
import helper from "@/styles/helpers.module.scss";


const Addresses = () => {
  return (
    <>
      <TitleHeader/>
      <main className={profile.body}>
        <input className={profile.addressSearch} type="text" placeholder="جست و جو آدرس"/>
        <span className={helper.wideBtn}>
          <i className={icon.locationFill}/>
          افزودن آدرس جدید
        </span>
        <div className={profile.addressCard}>
          <div className={profile.addressCardDetail}>
            <span className={profile.addressCardTitle}>
              دفتر کار
            </span>
            <p>
              تهران ، خیابان امام خمینی ، میدان امام خمینی ،خیابان شیخ هادی ، کوچه ارجمند ، پلاک ۲۳ ، واحد ۲
              ۰۹۱۲۳۴۳۵۶۷۷
            </p>
          </div>
          <div className={profile.addressCardImg}></div>
        </div>
        <div className={profile.addressCard}>
          <div className={profile.addressCardDetail}>
            <span className={profile.addressCardTitle}>
              دفتر کار
            </span>
            <p>
              تهران ، خیابان امام خمینی ، میدان امام خمینی ،خیابان شیخ هادی ، کوچه ارجمند ، پلاک ۲۳ ، واحد ۲
              ۰۹۱۲۳۴۳۵۶۷۷
            </p>
          </div>
          <div className={profile.addressCardImg}></div>
        </div>
      </main>
    </>
  )
}

export default Addresses