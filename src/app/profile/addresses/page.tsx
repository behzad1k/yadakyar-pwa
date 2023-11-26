"use client";
import TitleHeader from "@/components/header/TitleHeader";
import { useAppSelector } from "@/services/store";
import icon from "@/styles/icons.module.scss";
import profile from "@/styles/profile.module.scss";
import helper from "@/styles/helpers.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { popupSlice } from "@/services/reducers";
import NewAddress from "./new/page";
import restApi from "@/services/restApi";
import { log } from "console";

const Addresses = () => {
  const addressReducer = useAppSelector((state) => state.userReducer.addresses);
  const dispatch = useDispatch();
  console.log("----------------");
  console.log(addressReducer);
  console.log("----------------");

  const addresses = [
    {
      title: "دفتر کار",
      address:
        "تهران ، خیابان امام خمینی ، میدان امام خمینی ،خیابان شیخ هادی ، کوچه ارجمند ، پلاک ۲۳ ، واحد ۲ ",
      phone: "۰۹۱۲۳۴۳۵۶۷۷",
    },
    {
      title: "دفتر کار",
      address:
        "تهران ، خیابان امام خمینی ، میدان امام خمینی ،خیابان شیخ هادی ، کوچه ارجمند ، پلاک ۲۳ ، واحد ۲ ",
      phone: "۰۹۱۲۳۴۳۵۶۷۷",
    },
    {
      title: "دفتر کار",
      address:
        "تهران ، خیابان امام خمینی ، میدان امام خمینی ،خیابان شیخ هادی ، کوچه ارجمند ، پلاک ۲۳ ، واحد ۲ ",
      phone: "۰۹۱۲۳۴۳۵۶۷۷",
    },
  ];

  const addressList = (addresses: any) => {
    addresses.map((address: any) => {
      <div className={profile.addressCard}>
        <div className={profile.addressCardDetail}>
          <span className={profile.addressCardTitle}>{address.title}</span>
          <p>
            {address.address}
            {address.phone}
          </p>
        </div>
        <div className={profile.addressCardImg}></div>
      </div>;
    });
  };

  return (
    <>
      <TitleHeader title="آدرس ها" />
      <main className={profile.body}>
        <input
          className={profile.addressSearch}
          type="text"
          placeholder="جست و جو آدرس"
        />
        <span
          className={helper.wideBtn}
          onClick={(event: any) => {
            dispatch(popupSlice.full(<NewAddress />));
          }}
        >
          <i className={icon.locationFill} />
          افزودن آدرس جدید
        </span>
        {addressList(addresses)}
      </main>
    </>
  );
};

export default Addresses;
