'use client';
import General from '@/app/category/[id]/components/General';
import { popupSlice } from '@/services/reducers';
import category from '@/styles/category.module.scss';
import helper from '@/styles/helpers.module.scss';
import icon from '@/styles/icons.module.scss';
import { useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';

const Filters = () => {
  const dispatch: any = useDispatch();

  return (
    <div className={category.filters}>
            <span>
              <i className={icon.addCar}/>
              انتخاب خودرو
              <i className={icon.chevronDown}/>
            </span>
      <span
        onClick={() => dispatch(popupSlice.bottom(<General />))}
      >
              <i className={icon.filter}/>
              فیلترها
              <i className={icon.chevronDown}/>
            </span>
      <span>
              قیمت
              <i className={icon.chevronDown}/>
            </span>
    </div>
  );
};

export default Filters;
