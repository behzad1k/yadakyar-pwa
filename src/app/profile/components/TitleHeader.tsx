"use client"
import { popupSlice } from '@/services/reducers';
import icon from "@/styles/icons.module.scss";
import profile from "@/styles/profile.module.scss";
import { useDispatch } from 'react-redux';

const TitleHeader = ({ onBack, title }: any) => {
  const dispatch: any = useDispatch();
  return (
    <header className={profile.header}>
      <i className={icon.headphone} />  
      <span>{title || 'حساب کاربری'}</span>
      <i className={icon.chevronLeft} onClick={() => onBack || dispatch(popupSlice.hide())}/>
    </header>
  );
};

export default TitleHeader;
