import icon from "@/styles/icons.module.scss";
import helper from "@/styles/helpers.module.scss";

const TitleHeader = () => {
  return (
    <header className={helper.headerWithTitle}>
      <i className={icon.headphone} />  
      <span>حساب کاربری</span>
      <i className={icon.chevronLeft} />
    </header>
  );
};

export default TitleHeader;