"use client";
import Addresses from "@/app/profile/addresses/page";
import Logout from "@/components/layout/Logout";
import { popupSlice } from "@/services/reducers";
import { useAppSelector } from "@/services/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import TitleHeader from "@/components/header/TitleHeader";
import icon from "@/styles/icons.module.scss";
import profile from "@/styles/profile.module.scss";
import Favorites from "./favorites/page";
import ProfileEdit from "./edit/page";
import {isLoggedIn} from '@/utils/user'
import { useEffect } from "react";

const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const profileReducer = useAppSelector((state) => state.userReducer.profile);

  useEffect(() => {
    if(!isLoggedIn()){
      router.push('./home');
    }
  }, []);

  return (
    <main className={profile.main}>
      <TitleHeader title="حساب کاربری" onBack={() => router.push("/home")} />
      <div className={profile.detail}>
        <i className={icon.profilePic} />
        <div>
          <span>{profileReducer?.name}</span>
          <span>{profileReducer?.mobile}</span>
        </div>
        <i className={icon.edit} />
      </div>
      <div className={profile.curveBody}>
        <div className={profile.options}>
          <div
            onClick={(event: any) => {
              event.preventDefault();
              dispatch(popupSlice.full(<Favorites />));
            }}
          >
            <i className={icon.heart} />
            <span>علاقه مندی ها</span>
            <i className={icon.chevronLeftBlack} />
          </div>
          <div
            onClick={(event: any) => {
              event.preventDefault();
              dispatch(popupSlice.full(<Addresses />));
            }}
          >
            <i className={icon.location} />
            <span>آدرس‌ها</span>
            <i className={icon.chevronLeftBlack} />
          </div>
          <div>
            <i className={icon.shoppingBag} />
            <span>سفارشات من</span>
            <i className={icon.chevronLeftBlack} />
          </div>
          <div
            onClick={(event: any) => {
              event.preventDefault();
              dispatch(popupSlice.full(<ProfileEdit />));
            }}
          >
            <i className={icon.user} />
            <span>ویرایش حساب کاربری</span>
            <i className={icon.chevronLeftBlack} />
          </div>
          <div>
            <i className={icon.faq} />
            <span>سوالات متداول</span>
          </div>
        </div>
        <div
          className={profile.logOut}
          onClick={() => dispatch(popupSlice.bottom(<Logout />))}
        >
          <i className={icon.logOut} />
          <span>خروج از حساب</span>
        </div>
      </div>
    </main>
  );
};

export default Profile;
