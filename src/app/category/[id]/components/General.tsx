"use client";
import useUrlParam from "@/hooks/useUrlParam";
import { popupSlice } from "@/services/reducers";
import category from "@/styles/category.module.scss";
import helper from "@/styles/helpers.module.scss";
import icon from "@/styles/icons.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

const General = () => {
  const { setUrlParam } = useUrlParam();
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
        <button
          type="button"
          className={helper.modalFilterDropdown}
          onClick={() => setUrlParam("company[]", 191)}
        >
          برند
        </button>
        <div className={helper.modalFilterDropdown}>
          <div>
            ارتفاع
            <i className={icon.chevronDown} />
          </div>
          <div className={helper.modalFilterDropdownContent}>
            <label htmlFor="">چپ</label>
            <label htmlFor="">راست</label>
          </div>
        </div>
        <div className={helper.modalFilterDropdown}>
          <div>
            جهت
            <i className={icon.chevronDown} />
          </div>
        </div>
        <button className={helper.wideBtn}>مشاهده نتیجه</button>
      </div>
    </>
    // <div className={category.filterModal}>
    //   <button type="button" className={category.filterModalDropdown} onClick={() => setUrlParam('company[]', 191)}>برند</button>
    //   <div className={category.filterModalDropdown}>ارتفاع</div>
    //   <div className={category.filterModalDropdown}>جهت</div>
    //   <button className={helper.wideBtn}>مشاهده نتیجه</button>
    // </div>
  );
};

export default General;
