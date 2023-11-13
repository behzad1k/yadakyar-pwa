import menu from "@/styles/menu.module.scss";
import icon from "@/styles/icons.module.scss";
import Header from "@/components/header/Header";

const Menu = () => {
  return (
    <main className={menu.main}>
     <Header />
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
