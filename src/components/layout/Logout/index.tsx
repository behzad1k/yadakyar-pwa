"use client";
import { popupSlice } from "@/services/reducers";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import helper from "@/styles/helpers.module.scss";
import icon from "@/styles/icons.module.scss";

const Logout = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("orderToken");
    dispatch(popupSlice.hide());
    router.push("/home");
  };

  return (
    <>
      <div
        className={helper.modalOverLay}
        // onClick={dispatch(popupSlice.hide())}
      />
      <div className={helper.modal}>
        <span className={helper.modalTitle}>
          <i className={icon.logOutBig} />
          خروج از حساب
        </span>
        <p>آیا میخواهید از حساب خود خارج شوید؟</p>

        <div className={helper.modalDoubleBtn}>
          <button onClick={logout}>
          خروج
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
  );
};

export default Logout;
