"use client"
import Search from '@/components/layout/Search';
import { popupSlice } from '@/services/reducers';
import restApi from '@/services/restApi';
import helper from "@/styles/helpers.module.scss";
import icon from "@/styles/icons.module.scss";
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

const Header = ({ onBack = undefined, query, setQuery }: any) => {
  const dispatch: any = useDispatch();
  const ref = useRef(null);
  const router = useRouter();
  useEffect(() => {
    if (query != undefined){
      // @ts-ignore
      ref.current?.focus();
    }
  }, []);

  return (
    <header className={helper.header}>
      <a href="tel:02135000424">
        <i className={icon.headphone}></i>
      </a>
      <form action="">
        <input
          ref={ref}
          type="text"
          placeholder="جست و جو"
          onFocus={() => {
            if(query == undefined)
            dispatch(popupSlice.middle(<Search />));
          }}
          onChange={(text: any) => setQuery(text.target.value)}/>
      </form>
      <i onClick={() => onBack ? onBack() : router.back() } className={icon.chevronLeft}></i>
    </header>
  );
};

export default Header;
