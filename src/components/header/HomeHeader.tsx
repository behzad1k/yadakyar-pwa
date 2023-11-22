import icon from "@/styles/icons.module.scss";
import homeHeader from "@/styles/homeHeader.module.scss";
import Link from 'next/link';

const HomeHeader = () => {
  return (

    <header className={homeHeader.main}>
      <div className={homeHeader.icons}>
        <i className={icon.headphone} />
        <div className={homeHeader.logo}>
          <img src="/logo-white.png" alt="" />
        </div>
        {<Link href="/profile">
          <i className={icon.profile}/>
        </Link>}
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
        <i className={icon.chevronDownWhite} />
      </div>
    </header>
  );
};

export default HomeHeader;
