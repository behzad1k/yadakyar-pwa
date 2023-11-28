"use client"
import useUrlParam from '@/hooks/useUrlParam';
import category from "@/styles/category.module.scss";
import helper from "@/styles/helpers.module.scss";
import { useRouter, useSearchParams } from 'next/navigation';


const General = () => {
  const { setUrlParam } = useUrlParam();
  
  return (
    <div className={category.filterModal}>
      <span>فیلتر ها</span>
      <button type="button" className={category.filterModalDropdown} onClick={() => setUrlParam('company[]', 191)}>برند</button>
      <div className={category.filterModalDropdown}>ارتفاع</div>
      <div className={category.filterModalDropdown}>جهت</div>
      <button className={helper.wideBtn}>مشاهده نتیجه</button>
    </div>
  )
}

export default General;
