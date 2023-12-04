"use client"
import useUrlParam from '@/hooks/useUrlParam';
import { popupSlice } from '@/services/reducers';
import helper from '@/styles/helpers.module.scss';
import category from '@/styles/category.module.scss';
import icon from '@/styles/icons.module.scss';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TwoThumbInputRange } from 'react-two-thumb-input-range';

const PriceModal = () => {
  const { setUrlParams, removeUrlParams } = useUrlParam();
  const { get } = useSearchParams()
  const MIN = Number(get('priceMin')) || 1000;
  const MAX = Number(get('priceMax')) || 1000000;
  const dispatch: any = useDispatch();
  const [range, setRange] = useState<[number, number]>([MIN, MAX]);

  const submit = () => {
    setUrlParams([
      {
        key: 'priceMin',
        value: range[0]
      },
      {
        key: 'priceMax',
        value: range[1]
      },
    ]);

    dispatch(popupSlice.hide());
  };

  const remove = () => {
    removeUrlParams([
      {
        key: 'priceMin',
      },
      {
        key: 'priceMax',
      }
    ])

    dispatch(popupSlice.hide());
  }

  return(
    <div className={helper.modal}>
      <i
        className={icon.close}
        onClick={(event: any) => {
          event.preventDefault();
          dispatch(popupSlice.hide());
        }}
      />
      <span className={helper.modalTitle}>رنچ قیمت مورد نظرت چقدره؟</span>
      <span className={category.priceModalRanges}>{`${range[1]} تومان - ${range[0]} تومان`}</span>
      <TwoThumbInputRange
        trackColor='#E84D0F'
        railColor='#E7E6E5'
        thumbColor='#E84D0F'
        showLabels={false}
        onChange={(values) => setRange(values)}
        values={range}
        min={MIN}
        max={MAX}
      />
      <span className={category.removePrice} onClick={remove}>پاک کردن</span>
      <button className={helper.wideBtn} onClick={submit}>مشاهده نتیجه</button>
    </div>
  )
};

export default PriceModal;
