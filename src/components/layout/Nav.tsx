import icon from "@/styles/icons.module.scss";
import nav from "@/styles/nav.module.scss";


const Nav = () => {
  return (
    <div className={nav.container}>
      <nav className={nav.main}>
        <span>
          <i className={icon.homeNav} />
          خانه
        </span>
        <span>
          <i className={icon.menuNav} />
          دسته بندی
        </span>
        <span>
          <i className={icon.sparePartNav} />
          استعلام قیمت
        </span>
        <span>
          <i className={icon.cartNav} />
          سبد خرید
        </span>
      </nav>
    </div>
  );
};

export default Nav;
