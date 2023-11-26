"use client"
import { popupSlice } from '@/services/reducers';
import icon from "@/styles/icons.module.scss";
import { useDispatch } from 'react-redux';
import helper from "@/styles/helpers.module.scss"

const TitleHeader = ({ onBack, title }: any) => {
  const dispatch: any = useDispatch();
  return (
    <header className={helper.headerWithTitle}>
      <i className={icon.headphone} />  
      <span>{title || 'حساب کاربری'}</span>
      <i className={icon.chevronLeft} onClick={() => onBack || dispatch(popupSlice.hide())}/>
    </header>
  );
};

export default TitleHeader;
