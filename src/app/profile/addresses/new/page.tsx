"use client"
import TitleHeader from "@/app/profile/components/TitleHeader";
import restApi from '@/services/restApi';
import profile from "@/styles/profile.module.scss";
import helper from "@/styles/helpers.module.scss";
import icon from "@/styles/icons.module.scss";
import { useState } from 'react';

const NewAddress = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const send = async () => {
    const res = await restApi('http://localhost:8080/api/v1/profile/address/add').post({
      name: "behzad",
      "mobile": "09379455353",
      "phone": "09939160502",
      "state": "31",
      "line": "",
      "code": "1234567890"
    })
  }

  return (
    step == 1 ?
    <>
      <TitleHeader title="افزودن آدرس"/>
      <main className={profile.body}>
        <div className={profile.newAddressInput}>
          <span>
            <span>*</span>
            عنوان آدرس
          </span>
          <input className={profile.newAddressInput} onChange={(input: any) => setName(input.target.value)} type="text" placeholder="مثال : خانه"/>
        </div>
        <div className={profile.newAddressInput}>
          <strong>موقعیت مکانی آدرس را مشخص کنید</strong>
          <input className={profile.newAddressInput} type="text" placeholder="جست و جو آدرس" name="" id=""/>
        </div>
        <div className={profile.newAddressMap}></div>
        <button className={helper.wideBtn}>
          <i className={icon.arrowLeft}/>
          تایید و ادامه
        </button>
      </main>
    </>
      :
    <>
      <TitleHeader/>
      <main className={profile.body}>
        <div className={profile.newAddressBack}>
          اصلاح موقعیت مکانی روی نقشه
          <i className={icon.arrowLeftBlue}/>
        </div>
        <div className={profile.newAddressInput}>
        <span>
          <span>*</span>
          استان
        </span>
          <input type="text"/>
        </div>
        <div className={profile.newAddressInput}>
          <span>
            <span>*</span>
            شهرستان
          </span>
          <input type="text"/>
        </div>
        <div className={profile.newAddressInput}>
        <span>
          <span>*</span>
          جزئیات آدرس
        </span>
          <input className={profile.newAddressInputBig} type="text"/>
        </div>
        <div className={profile.newAddressInput}>
          <span>
            <span>*</span>
            شهرستان
          </span>
          <input type="text"/>
        </div>
        <div className={profile.newAddressInput}>
          <span>
            <span>*</span>
            شهرستان
          </span>
          <input type="text"/>
        </div>
        <label htmlFor="receiver">
          <input type="checkbox" id="receiver"/>
          <span>گیرنده سفارش خودم هستم</span>
        </label>
      </main>
    </>
  )
}

export default NewAddress;