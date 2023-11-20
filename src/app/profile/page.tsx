"use client"
import Header from "@/components/header/Header";
import restApi from '@/services/restApi';
import { useEffect } from 'react';
import TitleHeader from "./components/TitleHeader";
import icon from "@/styles/icons.module.scss";
import profile from "@/styles/profile.module.scss";

const Profile = () => {

  const fetchData = async () => {
    const res = await restApi('http://localhost:8080/profile', true).get
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={profile.main}>
      <TitleHeader />
      <div className={profile.detail}>
        <i className={icon.profilePic} />
        <div>
          <span>سید مهدی موسوی جلال</span>
          <span>۰۹۳۸۵۵۹۱۱۱۵</span>
        </div>
        <i className={icon.edit} />
      </div>
      <div className={profile.curveBody}>
        <div className={profile.options}>
          <div>
            <i className={icon.heart} />
            <span>علاقه مندی ها</span>
            <i className={icon.chevronLeftBlack} />
          </div>
          <div>
            <i className={icon.location} />
            <span>آدرس‌ها</span>
            <i className={icon.chevronLeftBlack} />
          </div>
          <div>
            <i className={icon.shoppingBag} />
            <span>سفارشات من</span>
            <i className={icon.chevronLeftBlack} />
          </div>
          <div>
            <i className={icon.user} />
            <span>ویرایش حساب کاربری</span>
            <i className={icon.chevronLeftBlack} />
          </div>
          <div>
            <i className={icon.faq} />
            <span>سوالات متداول</span>
          </div>
        </div>
        <div className={profile.logOut}>
          <i className={icon.logOut} />
          <span>خروج از حساب</span>
        </div>
      </div>
    </main>
  );
};

export default Profile;
