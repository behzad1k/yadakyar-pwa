"use client";
import Modal from "@/components/helpers/modal/Modal";
import { popupSlice } from "@/services/reducers";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import helper from "@/styles/helpers.module.scss";
import { useState } from "react";
import icon from "@/styles/icons.module.scss";

const PhoneEdit = () => {
  const [step, setStep] = useState(1);
  const dispatch: any = useDispatch();
  const router = useRouter();

  return step == 1 ? (
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
        <span className={helper.modalTitle}>
          شماره موبایل جدید را وارد کنید{" "}
        </span>
        <input type="number" placeholder="شماره موبایل جدید را وارد کنید" />
        <div className={helper.modalDoubleBtn}>
          <button
            onClick={(event: any) => {
              event.preventDefault();
              setStep(2);
            }}
          >
            دریافت کد تایید
          </button>
          <button
            onClick={(event: any) => {
              event.preventDefault();
              dispatch(popupSlice.hide());
            }}
          >
            انصراف
          </button>
        </div>
      </div>
    </>
  ) : (
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
        <span className={helper.modalTitle}>
          شماره موبایل جدید را وارد کنید{" "}
        </span>
        <input type="number" placeholder="شماره موبایل جدید را وارد کنید" />
        <div className={helper.modalDoubleBtn}>
          <button>ثبت شماره موبایل جدید</button>
          <button
            onClick={(event: any) => {
              event.preventDefault();
              dispatch(popupSlice.hide());
            }}
          >
            انصراف
          </button>
        </div>
      </div>
    </>
  );
};

export default PhoneEdit;
