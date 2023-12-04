"use client";
import Header from "@/components/header/Header";
import { setLoading } from '@/services/reducers/homeSlice';
import restApi from '@/services/restApi';
import icon from "@/styles/icons.module.scss";
import shipping from "@/styles/shipping.module.scss";
import helper from "@/styles/helpers.module.scss";
import ShippingHeader from "@/app/shipping/components/Header";
import AddressCard from "@/app/shipping/components/AddressCard";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import AddressStep from "./steps/AddressStep";
import PaymentStep from "./steps/PaymentStep";

const Shipping = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [payment, setPayment] = useState<any>();
  const [sendType, setSendType] = useState<any>();
  const [address, setAddress] = useState<any>();

  const validate = () => {
    if (!payment){
      toast('لطفا نحوه پرداخت را انتخاب کنید', { type: 'error' });
      return false;
    } else if(!address){
      toast('لطفا آدرس خود را انتخاب کنید', { type: 'error' });
      return false;
    } else if(!sendType){
      toast('لطفا نحوه ارسال را انتخاب کنید', { type: 'error' });
      return false;
    }
    return true;
  };
  const send = async () => {

    if (!validate()){
      return ;
    }
    dispatch(setLoading(true));

    const res = await restApi(process.env.BASE_URL + '/v1/payment/', true, true).post({
      address: address.id,
      payment: payment.id,
      send: sendType.id,
    });

    toast(res.message, { type: res.error ? 'error' : 'success' });

    if (!res.error && res.url){
      window.location.href = res.url;
    }
    dispatch(setLoading(false));
  }

  return (
    <>
      <ShippingHeader step={step} setStep={setStep}/>
      {step == 1 ?
        <AddressStep setStep={setStep} setAddress={setAddress} address={address} setSendType={setSendType} sendType={sendType} /> :
        <>
          <PaymentStep setPayment={setPayment} payment={payment} />
          <div className={shipping.fixBtnBackground}>
            <button className={helper.wideBtn} onClick={send}>
              مشاهده فاکتور و پرداخت
            </button>
          </div>
        </>
      }
    </>
  );
};

export default Shipping;
