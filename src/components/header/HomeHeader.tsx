"use client"
import Login from '@/components/layout/login';
import Search from '@/components/layout/Search';
import { popupSlice } from '@/services/reducers';
import icon from "@/styles/icons.module.scss";
import homeHeader from "@/styles/homeHeader.module.scss";
import { isLoggedIn } from '@/utils/user';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

const HomeHeader = ({ query, setQuery }: any) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const router = useRouter();
  useEffect(() => {
    if (query != undefined){
      // @ts-ignore
      ref.current?.focus();
    }
  }, []);
  return (
    <header className={homeHeader.main}>
      <div className={homeHeader.icons}>
        <a href="tel:02135000424">
          <i className={icon.headphone} />
        </a>
        <div className={homeHeader.logo}>
          <img src="/new-logo.png" alt="" />
        </div>
        <Link href="/profile" onClick={(event: any) => {
          if (!isLoggedIn()) {
            event.preventDefault();
            dispatch(popupSlice.bottom(<Login />));
          }
        }} >
          <i className={icon.profile}/>
        </Link>
      </div>
      <div className={homeHeader.search}>
        <input
          ref={ref}
          type="text"
          placeholder="جست و جو"
          onFocus={() => {
            if(query == undefined)
              dispatch(popupSlice.middle(<Search />));
          }}
          onChange={(text: any) => setQuery(text.target.value)}/>
      </div>
      <div className={homeHeader.carSelect}>
        <span>
          کاربر عزیز سید عماد
          <small> | خوش آمدید!</small>
        </span>
        <i className={icon.chevronDownWhite} />
      </div>
    </header>
  );
};

export default HomeHeader;
