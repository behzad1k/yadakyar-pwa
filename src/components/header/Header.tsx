"use client"
import Search from '@/components/layout/Search';
import { popupSlice } from '@/services/reducers';
import restApi from '@/services/restApi';
import header from "@/styles/header.module.scss";
import icon from "@/styles/icons.module.scss";
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

const Header = ({ onBack, query, setQuery }: any) => {
  const dispatch: any = useDispatch();
  const ref = useRef(null);

  useEffect(() => {
    if (query != undefined){
      // @ts-ignore
      ref.current?.focus();
    }
  }, []);

  return (
    <header className={header.head}>
      <i className={icon.headphone}></i>
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
      <i onClick={onBack} className={icon.chevronLeft}></i>
    </header>
  );
};

export default Header;
