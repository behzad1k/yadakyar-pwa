"use client";
import { homeSlice, popupSlice } from "@/services/reducers";
import { profile } from '@/services/reducers/userSlice';
import restApi from "@/services/restApi";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import helper from "@/styles/helpers.module.scss";
import icon from "@/styles/icons.module.scss";

const Login = () => {
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const dispatch: any = useDispatch();

  const login = async () => {
    dispatch(homeSlice.setLoading(true));

    const res = await restApi(process.env.BASE_URL + '/v1/login/').post({
      mobile: phone,
    });

    if (!res.error) {
      setStep((prevState) => prevState + 1);
      toast("کد با موفقیت برای شما ارسال شد.", { type: "success" });
    } else {
      toast("خطایی رخ داده است. لطفا مجددا تلاش کنید.", { type: "success" });
      
    }

    dispatch(homeSlice.setLoading(false));
  };

  const verify = async () => {
    dispatch(homeSlice.setLoading(true));

    const res = await restApi(process.env.BASE_URL + '/v1/verify/').post({
      mobile: phone,
      code: otp,
    });

    if (!res.error) {
      Cookies.set("token", res.data.token);
      toast("شما با موفقیت وارد شدید", { type: "success" });
      dispatch(profile());
      dispatch(popupSlice.hide());
    } else {
      toast("خطایی رخ داده است. لطفا مجددا تلاش کنید.", { type: "success" });
      
    }

    dispatch(homeSlice.setLoading(false));
  };

  const handleStep = () => {
    if (step == 1) {
      login();
    } else if (step == 2) {
      verify();
    }
  };

  return (
    <>
      <div
        className={helper.modalOverLay}
        // onClick={dispatch(popupSlice.hide())}
      />
      <div className={`${helper.modal} ${helper.modalLogIn}`}>
        <i className={icon.close} />
        <div className={helper.modalLogo}>
          <img src="/new-logo.jpg" alt="" />
        </div>
        {step == 1 ? (
          <>
            <span className={helper.modalTitle}>ورود | ثبت نام</span>
            <p>شماره موبایل خود را وارد کنید</p>
            <input
              className={helper.phoneInput}
              type="tel"
              value={phone}
              placeholder="09120000000"
              onChange={(text: any) => setPhone(text.target.value)}
            />
          </>
        ) : (
          <>
            <p>شماره موبایل خود را وارد کنید</p>
            <div className={helper.modalOtp}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={5}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
            </div>
          </>
        )}

        <div className={helper.modalDoubleBtn}>
          <button onClick={handleStep}>
            {step == 1 ? "دریافت کد" : "ورود"}
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

export default Login;
