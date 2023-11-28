"use client";
import TitleHeader from "@/components/header/TitleHeader";
import restApi from "@/services/restApi";
import profile from "@/styles/profile.module.scss";
import helper from "@/styles/helpers.module.scss";
import icon from "@/styles/icons.module.scss";
import { ReactElement, useEffect, useState } from "react";
import Search from "@/components/layout/Search";
import SearchSelect from "@/components/SearchSelect/SearchSelect";
import { ReactReduxContext, useDispatch } from "react-redux";
import { setLoading } from "@/services/reducers/homeSlice";
import { toast } from "react-toastify";
import { addresses } from "@/services/reducers/userSlice";

const NewAddress = () => {
  const [step, setStep] = useState(2);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState();
  const [provinces, setProvinces] = useState([]);
  const [line, setLine] = useState("");
  const [code, setCode] = useState("");
  const dispatch: any = useDispatch();

  const send = async () => {
    dispatch(setLoading(true));

    const res = await restApi(
      "https://yadakyar/api/v1/profile/address/add/"
    ).post({
      name: name,
      mobile: mobile,
      phone: phone,
      state: province,
      line: line,
      code: code,
    });

    if (!res.error) {
      toast("ok bud haji", { type: "success" });
      dispatch(addresses());
    } else {
      toast(res.data, { type: "error" });
    }
    dispatch(setLoading(false));
  };

  const fetchData = async () => {
    const res = await restApi("https://yadakyar.com/api/v1/state/").get();
    setProvinces(Object.values(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  

  const provincesList = () => {
    const rows: ReactElement[] = [];
    return rows;
  };

  return step == 1 ? (
    <>
      <TitleHeader title="افزودن آدرس" />
      <main className={profile.body}>
        <div className={profile.newAddressInput}>
          <span>
            <span>*</span>
            عنوان آدرس
          </span>
          <input
            className={profile.newAddressInput}
            onChange={(input: any) => setName(input.target.value)}
            type="text"
            placeholder="مثال : خانه"
          />
        </div>
        <div className={profile.newAddressInput}>
          <strong>موقعیت مکانی آدرس را مشخص کنید</strong>
          <input
            className={profile.newAddressInput}
            type="text"
            placeholder="جست و جو آدرس"
            name=""
            id=""
          />
        </div>
        <div className={profile.newAddressMap}></div>
        <button
          className={helper.wideBtn}
          onClick={(event: any) => {
            event.preventDefault();
            setStep(2);
          }}
        >
          <i className={icon.arrowLeft} />
          تایید و ادامه
        </button>
      </main>
    </>
  ) : (
    <>
      <TitleHeader />
      <main className={profile.body}>
        <div
          className={profile.newAddressBack}
          onClick={() => {
            setStep(1);
          }}
        >
          اصلاح موقعیت مکانی روی نقشه
          <i className={icon.arrowLeftBlue} />
        </div>
        <div className={profile.newAddressInputRow}>
          <div className={profile.newAddressInput}>
            <span>
              <span>*</span>
              استان
            </span>
            {provinces.length && <SearchSelect data={provinces} selected={province} setSelected={setProvince} /> }
          </div>
          <div className={profile.newAddressInput}>
            <span>
              <span>*</span>
              شهرستان
            </span>
            {/* <SearchSelect /> */}
          </div>
        </div>
        <div className={profile.newAddressInput}>
          <span>
            <span>*</span>
            جزئیات آدرس
          </span>
          <textarea
            className={profile.newAddressInputBig}
            onChange={(input: any) => setLine(input.target.value)}
          />
        </div>
        <div className={profile.newAddressInputRow}>
          <div className={profile.newAddressInput}>
            <span>
              <span>*</span>
              پلاک
            </span>
            <input type="text" />
          </div>
          <div className={profile.newAddressInput}>
            <span>
              <span>*</span>
              کد پستی <small>( ۱۰ رقم بدون خط تیره)</small>
            </span>
            <input
              onChange={(input: any) => setCode(input.target.value)}
              type="text"
            />
          </div>
        </div>
        <label htmlFor="receiver">
          <input type="checkbox" id="receiver" />
          <span>گیرنده سفارش خودم هستم</span>
        </label>
        <div className={profile.newAddressInputRow}>
          <div className={profile.newAddressInput}>
            <span>
              <span>*</span>
              نام و نام خانوادگی گیرنده
            </span>
            <input type="text" />
          </div>
          <div className={profile.newAddressInput}>
            <span>
              <span>*</span>
              شماره موبایل
            </span>
            <input
              type="text"
              onChange={(input: any) => setMobile(input.target.value)}
            />
          </div>
        </div>
        <button className={helper.wideBtn} onClick={send}>ثبت آدرس</button>
      </main>
    </>
  );
};

export default NewAddress;
