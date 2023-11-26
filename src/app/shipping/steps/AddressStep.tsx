"use client";
import Header from "@/components/header/Header";
import icon from "@/styles/icons.module.scss";
import shipping from "@/styles/shipping.module.scss";
import helper from "@/styles/helpers.module.scss";
import ShippingHeader from "@/app/shipping/components/Header";
import AddressCard from "@/app/shipping/components/AddressCard";
import { ReactElement, useState } from "react";
import MethodCard from "../components/MethodCard";

const AddressStep = ({ setStep }) => {
  const [methodSelected, setMethodSelected] = useState(false);
  const shippingMethods = [
    { title: "پست پیشتاز", description: "ارسال ۲ تا ۴ روز کاری", logo: "" },
    { title: "وانت", description: "ارسال تا ۱ روز کاری", logo: "" },
    {
      title: "تیپاکس",
      description: "تا ۲۴ ساعت تهران و ۷۲ ساعت شهرستان",
      logo: "",
    },
    { title: "پیک موتوری", description: "فقط استان تهران", logo: "" },
  ];

  const addresses = [
    {
      title: "دفتر کار",
      address:
        "تهران ، خیابان امام خمینی ، میدان امام خمینی ،خیابان شیخ هادی ، کوچه ارجمند ، پلاک ۲۳ ، واحد ۲ ",
      phone: "۰۹۱۲۳۴۳۵۶۷۷",
    },
  ];

  const shippingMehtodList = (methods) => {
    const rows: ReactElement[] = [];
    methods.map((method: any) => {
      rows.push(
        <MethodCard
          title={method.title}
          description={method.description}
          onClick={() => {
            setMethodSelected(true);
          }}
          methodSelected={methodSelected}
        />
      );
    });
    return rows;
  };

  const addressesList = () => {
    const rows: ReactElement[] = [];
    addresses.map((address) => {
      rows.push(
        <AddressCard
          title={address.title}
          address={address.address}
          phone={address.phone}
        />
      );
    });
    return rows;
  };

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
          {shippingMehtodList(shippingMethods)}
        </div>
      </section>
      <div className={shipping.fixBtnBackground}>
        <button className={shipping.submitBtn} onClick={() => setStep(2)}>
          مشاهده فاکتور و پرداخت
        </button>
        <div className={shipping.fixedPriceBox}>
          <small>جمع سبد خرید</small>
          <span>۲۳,۲۳۵,۰۰۰ تومان</span>
        </div>
      </div>
    </main>
  );
};

export default AddressStep;
