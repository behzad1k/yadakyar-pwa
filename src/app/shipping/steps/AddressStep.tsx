"use client";
import Header from "@/components/header/Header";
import restApi from '@/services/restApi';
import { useAppSelector } from '@/services/store';
import icon from "@/styles/icons.module.scss";
import shipping from "@/styles/shipping.module.scss";
import helper from "@/styles/helpers.module.scss";
import ShippingHeader from "@/app/shipping/components/Header";
import AddressCard from "@/app/shipping/components/AddressCard";
import tools from '@/utils/tools';
import { ReactElement, useEffect, useState } from 'react';
import MethodCard from "../components/MethodCard";

const AddressStep = ({ setStep, setAddress, address, setSendType, sendType }: any) => {
  const addresses = useAppSelector(state => state.userReducer.addresses);
  const cartReducer = useAppSelector(state => state.cartReducer.cart);
  const [sendTypes, setSendTypes] = useState([]);

  const shippingMehtodList = () => {
    const rows: ReactElement[] = [];

    sendTypes?.map((method: any) => {
      rows.push(
        <MethodCard
          title={method.title}
          description={method.description}
          onClick={() => {
            setSendType(method);
          }}
          methodSelected={sendType?.id == method.id}
        />
      );
    });

    return rows;
  };

  const addressesList = () => {
    const rows: ReactElement[] = [];

    addresses.map((addr) => {
      rows.push(
        <AddressCard
          title={addr.name}
          address={addr.line}
          phone={addr.mobile}
          onClick={() => setAddress(addr)}
          selected={address?.id === addr.id}
        />
      );
    });

    return rows;
  };

  const fetchSendTypes = async () => {
    const res = await restApi(process.env.BASE_URL + '/v1/sendType/').get();

    if (!res.error){
      setSendTypes(res.data);
    }
  };

  useEffect(() => {
    fetchSendTypes()
  }, []);

  return (
    <main className={shipping.body}>
      <section className={shipping.progressBar}>
        <div className={shipping.progressBarIcons}>
          <div>
            <i className={icon.shippingProgressChecked} />
          </div>
          <span>----------</span>
          <div>
            <i className={icon.shippingProgressCurrent} />
          </div>
          <span>----------</span>
          <div>
            <i className={icon.shippingProgressNext} />
          </div>
        </div>
        <div className={shipping.progressBarTitles}>
          <span>تایید سبد خرید</span>
          <span>انتخاب آدرس و روش ارسال</span>
          <span>مشاهده فاکتور و پرداخت</span>
        </div>
      </section>
      <section className={shipping.addresses}>
        <strong>آدرس خود را انتخاب کنید</strong>
        <div className={shipping.addressesCarousel}>
          <div className={shipping.addressesAddNew}>
            <i className={icon.plusOrangeBig} />
          </div>
          {addressesList()}
        </div>
      </section>
      <section className={shipping.method}>
        <strong>روش ارسال را انتخاب کنید</strong>
        <div className={shipping.methodSelect}>
          {shippingMehtodList()}
        </div>
      </section>
      <div className={shipping.fixBtnBackground}>
        <button className={shipping.submitBtn} onClick={() => setStep(prev => prev + 1)}>
          مشاهده فاکتور و پرداخت
        </button>
        <div className={shipping.fixedPriceBox}>
          <small>جمع سبد خرید</small>
          <span>{tools.formatPrice(cartReducer?.sumProductPrice)} تومان</span>
        </div>
      </div>
    </main>
  );
};

export default AddressStep;
