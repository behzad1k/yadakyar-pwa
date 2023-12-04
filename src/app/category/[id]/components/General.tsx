"use client";
import BrandModal from '@/app/category/[id]/components/BrandModal';
import useUrlParam from "@/hooks/useUrlParam";
import { popupSlice } from "@/services/reducers";
import helper from "@/styles/helpers.module.scss";
import icon from "@/styles/icons.module.scss";
import { useState } from 'react';
import { useDispatch } from "react-redux";

const General = () => {
  const { setUrlParam } = useUrlParam();
  const dispatch: any = useDispatch();
  const [step, setStep] = useState('general');

  const renderStep = () => {
    if (step == 'general'){
      return (
        <>
          <span className={helper.modalTitle}>فیلتر ها</span>
          <button
            type="button"
            className={helper.modalFilterDropdown}
            onClick={() => setStep('brand')}
          >
            برند
          </button>
      {/* <div className={helper.modalFilterDropdown}> */}
      {/*   <div> */}
      {/*     ارتفاع */}
      {/*     <i className={icon.chevronDown} /> */}
      {/*   </div> */}
      {/*   <div className={helper.modalFilterDropdownContent}> */}
      {/*     <label htmlFor="">چپ</label> */}
      {/*     <label htmlFor="">راست</label> */}
      {/*   </div> */}
      {/* </div> */}
      {/* <div className={helper.modalFilterDropdown}> */}
      {/*   <div> */}
      {/*     جهت */}
      {/*     <i className={icon.chevronDown} /> */}
      {/*   </div> */}
      {/* </div> */}
        </>
      )
    } else if(step == 'brand'){
      return <BrandModal />
    }
  };

  return (
    <>
      <div className={helper.modal}>
        <i
          className={icon.close}
          onClick={(event: any) => {
            event.preventDefault();
            dispatch(popupSlice.hide());
          }}
        />
          {renderStep()}
        <button className={helper.wideBtn} onClick={() => dispatch(popupSlice.hide())}>مشاهده نتیجه</button>
      </div>
    </>
  );
};

export default General;
