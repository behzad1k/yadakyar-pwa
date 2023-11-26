"use client"
import { popupSlice } from "@/services/reducers";
import category from "@/styles/category.module.scss";
import helper from "@/styles/helpers.module.scss";
import icon from "@/styles/icons.module.scss";
import { useDispatch } from "react-redux";

const Filters = () => {
  const dispatch: any = useDispatch();

  return (
    <>
      <div
        className={helper.modalOverLay}
        onClick={() => dispatch(popupSlice.hide())}
      />
      <div className={helper.modal}>
        <i
          className={icon.close}
          onClick={(event: any) => {
            event.preventDefault();
            dispatch(popupSlice.hide());
          }}
        />
        <span className={helper.modalTitle}>فیلتر ها</span>
        <div className={helper.modalDropdown}>برند</div>
        <div className={helper.modalDropdown}>ارتفاع</div>
        <div className={helper.modalDropdown}>جهت</div>
        <button className={helper.wideBtn}>ثبت</button>
      </div>
    </>
  );
};

export default Filters;
