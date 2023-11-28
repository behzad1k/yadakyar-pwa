import icon from "@/styles/icons.module.scss";
import modal from "@/styles/modal.module.scss";
import category from "@/styles/category.module.scss";
import helper from "@/styles/helpers.module.scss";

const Modal = ({ children }: any) => {
  return (
    <div className={category.filterModal}>
      <span>فیلتر ها</span>
      <div className={category.filterModalDropdown}>برند</div>
      <div className={category.filterModalDropdown}>ارتفاع</div>
      <div className={category.filterModalDropdown}>جهت</div>
      <button className={helper.wideBtn}>مشاهده نتیجه</button>
    </div>
  );
};

export default Modal;
