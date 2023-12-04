"use client"
import CarPicker from '@/app/productReq/ProductReqForm/components/CarPicker';
import { popupSlice } from '@/services/reducers';
import productReq from '@/styles/productReqForm.module.scss';
import icon from '@/styles/icons.module.scss';
import { useDispatch } from 'react-redux';

const CarModal = ({ partName }: any) => {
  const dispatch: any = useDispatch();
  const handleSubmit = () => {
    dispatch(popupSlice.hide());
    setTimeout(() => dispatch(popupSlice.bottom(<CarPicker partName={partName}/>)), 350)
  };

  return (
    <main className={productReq.carModalContainer}>
      <i className={icon.carReq}></i>
      <span className={productReq.carModalContainerTitle}>خودرو خود را انتخاب کنید</span>
      <span className={productReq.carModalContainerDesc}>
        برای استعلام قیمت قطعه،
ابتدا باید مدل خودروی خود را انتخاب کنید</span>
      <button onClick={handleSubmit}>انتخاب خودرو</button>
    </main>
  )
};

export default CarModal;
