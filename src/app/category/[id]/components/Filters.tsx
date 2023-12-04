'use client';
import CarPicker from '@/app/category/[id]/components/CarPicker';
import General from '@/app/category/[id]/components/General';
import PriceModal from '@/app/category/[id]/components/PriceModal';
import { popupSlice } from '@/services/reducers';
import category from '@/styles/category.module.scss';
import icon from '@/styles/icons.module.scss';
import { useDispatch } from 'react-redux';

const Filters = () => {
  const dispatch: any = useDispatch();

  return (
    <div className={category.filters}>
      <span
        onClick={() => dispatch(popupSlice.bottom(<CarPicker/>))}
      >
        <i className={icon.addCar}/>
        انتخاب خودرو
        <i className={icon.chevronDown}/>
      </span>
      <span
        onClick={() => dispatch(popupSlice.bottom(<General/>))}
      >
        <i className={icon.filter}/>
        فیلترها
        <i className={icon.chevronDown}/>
      </span>
      <span onClick={() => dispatch(popupSlice.bottom(<PriceModal />))}>
        قیمت
        <i className={icon.chevronDown}/>
      </span>
    </div>
  );
};

export default Filters;
