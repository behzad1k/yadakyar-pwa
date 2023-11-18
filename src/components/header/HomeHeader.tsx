import icon from "@/styles/icons.module.scss";
import homeHeader from "@/styles/homeHeader.module.scss";

const HomeHeader = () => {
  return (

    <header className={homeHeader.main}>
      <div className={homeHeader.icons}>
        <i className={icon.headphone} />
        <div className={homeHeader.logo}>
          <img src="/logo-white.png" alt="" />
        </div>
        <i className={icon.profile} />
      </div>
      <div className={homeHeader.search}>
        <form action="">
          <input type="text" placeholder="جست و جو" />
        </form>
      </div>
      <div className={homeHeader.carSelect}>
        <span>
          ماشینت چیه؟
          <small> | انتخاب کن</small>
        </span>
        <i className={icon.chevronBotWhite} />
      </div>
    </header>
  );
};

export default HomeHeader;
