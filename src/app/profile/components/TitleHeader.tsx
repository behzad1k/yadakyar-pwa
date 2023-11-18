import icon from "@/styles/icons.module.scss";
import profile from "@/styles/profile.module.scss";

const TitleHeader = () => {
  return (
    <header className={profile.header}>
      <i className={icon.headphone} />  
      <span>حساب کاربری</span>
      <i className={icon.chevronLeft} />
    </header>
  );
};

export default TitleHeader;
