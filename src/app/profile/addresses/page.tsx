"use client";
import TitleHeader from "@/components/header/TitleHeader";
import { useAppSelector } from "@/services/store";
import icon from "@/styles/icons.module.scss";
import profile from "@/styles/profile.module.scss";
import helper from "@/styles/helpers.module.scss";
import { ReactElement, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { popupSlice } from "@/services/reducers";
import NewAddress from "./new/page";
import restApi from "@/services/restApi";
import { log } from "console";

const Addresses = () => {
  const addressReducer = useAppSelector((state) => state.userReducer.addresses);
  const dispatch = useDispatch();
  
  const addressList = () => {
    const rows: ReactElement[] = [];

    addressReducer.map((address: any) =>
      rows.push(
        <div className={profile.addressCard}>
          <div className={profile.addressCardDetail}>
            <span className={profile.addressCardTitle}>{address.title}</span>
            <p>
              {address.address}
              {address.phone}
            </p>
          </div>
          <div className={profile.addressCardImg}></div>
        </div>
      )
    );

    return rows;
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
          onClick={() => {
            dispatch(popupSlice.full(<NewAddress />));
          }}
        >
          <i className={icon.locationFill} />
          افزودن آدرس جدید
        </span>
        {addressList()}
      </main>
    </>
  );
};

export default Addresses;
