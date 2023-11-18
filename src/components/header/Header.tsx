import header from "@/styles/header.module.scss";
import icon from "@/styles/icons.module.scss";

const Header = () => {
  return (
    <header className={header.head}>
      <i className={icon.headphone}></i>
      <form action="">
        <input type="text" placeholder="جست و جو"/>
      </form>
      <i className={icon.chevronLeft}></i>
    </header>
  );
};

export default Header;
