"use client"
import CarModal from '@/app/productReq/ProductReqForm/components/CarModal';
import { popupSlice } from '@/services/reducers';
import icon from '@/styles/icons.module.scss';
import productReq from '@/styles/productReqForm.module.scss';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ProductReqForm = () => {
  const [partName, setPartName] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <main className={productReq.container}>
      <div className={productReq.shortFormHead}>
        <i className={icon.headphoneBlue} />
        <div className={productReq.title}>
          <i className={icon.sparePartBlue} />
          <span>سریع قیمت بگیر!</span>
          <p>اسم قطعه مورد نظرت رو بنویس تا کمتر از دو دقیقه قیمتشو بهت بگیم</p>
        </div>
        <i className={icon.chevronLeftBlue} onClick={() => router.back()}/>
      </div>
      <div className={productReq.shortFormBody}>
        <strong>استعلام قیمت</strong>
        <input type="text" placeholder="نام قطعه" onChange={(input: any) => setPartName(input.target.value)}/>
        <span>
          <i className={icon.plus} />
        </span>
        <button onClick={() => dispatch(popupSlice.bottom(<CarModal partName={partName}/>))}>ثبت استعلام</button>
      </div>
    </main>
  );
};

export default ProductReqForm;
