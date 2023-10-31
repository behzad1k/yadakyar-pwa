import menu from "@/styles/menu.module.scss";
import icon from "@/styles/icons.module.scss";

const Menu = () => {
  return (
    <main className={menu.main}>
      <section className={menu.head}>
        <i className={icon.headphone}></i>
        <form action="">
          <input type="text" placeholder="جست و جو" />
        </form>
        <i className={icon.chevronLeft}></i>
      </section>
      <section className={menu.body}>
        <span className={menu.title}>دسته بندی‌ها</span>
        <a href="#">قطعات بدنه</a>
        <a href="#">موتور و اگزوز</a>
        <a href="#">فرمان،جلوبندی و ترمز</a>
        <a href="#">رینگ و لاستیک</a>
        <a href="#">روغن و فیلتر </a>
        <a href="#">فرمان،جلوبندی و ترمز</a>
        <a href="#">برقی و الکتریکی</a>
        <a href="#">لوازم جانبی و اسپرت</a>
        <a href="#">قطعات بدنه</a>
        <a href="#">فرمان،جلوبندی و ترمز</a>
        <a href="#">لوازم جانبی و اسپرت</a>
      </section>
    </main>
  );
};

export default Menu;
