"use client";
import Modal from "@/components/helpers/modal/Modal";
import { popupSlice } from "@/services/reducers";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import helper from "@/styles/helpers.module.scss";
import icon from "@/styles/icons.module.scss";

const EmailEdit = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();

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
        <span className={helper.modalTitle}>آدرس ایمیل خود را وارد کنید </span>
        <input type="text" placeholder="آدرس ایمیل" />
        <div className={helper.modalDoubleBtn}>
          <button>ثبت</button>
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

export default EmailEdit;
