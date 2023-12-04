"use client"
import { homeSlice, popupSlice } from '@/services/reducers';
import restApi from '@/services/restApi';
import category from '@/styles/category.module.scss';
import helper from '@/styles/helpers.module.scss';
import icon from '@/styles/icons.module.scss';
import menu from '@/styles/menu.module.scss';
import { ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { TwoThumbInputRange } from 'react-two-thumb-input-range';

const CarPicker = ({ partName }: any) => {
  const dispatch: any = useDispatch();
  const [data, setData] = useState<any>();
  const [current, setCurrent] = useState<any>();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<any>();

  const send = async () => {
    dispatch(homeSlice.setLoading(true));

    const res = await restApi(process.env.BASE_URL + '/v1/requestItem/', true).post({
      car: selected.id,
      partName: partName
    });

    toast(res.message, { type: res.error ? 'error' : 'success' })
    dispatch(homeSlice.setLoading(false));
    dispatch(popupSlice.hide());
  }

  const list = () => {
    const rows: ReactElement[] = [];
    if (current || query.length){
      data.filter((car: any) => current ? car.parent == current?.id : car.title.includes(query.toLowerCase())).map((car: any, index) =>
        rows.push(
          <div key={'car' + index} className={helper.carItem} onClick={() => setSelected(car)}>
            <i className={selected?.id == car.id ? 'checkbox-active' : 'checkbox'}></i>
            <span>{car.title}</span>
          </div>
        )
      )
    } else {
      data.filter((car: any) => car.title.includes(query.toLowerCase()) && car.parent == '0').map((car: any, index) =>
        rows.push(
          <a
            onClick={() => setCurrent(car)}
            key={index}
          >{car.title}</a>
        )
      );
    }

    return rows;
  }

  const fetchData = async () => {
    const res = await restApi(process.env.BASE_URL + '/v1/car/').get();

    setData(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <div className={helper.carPicker}>
      <span className={helper.carPickerTitle}>
        <i className={icon.car}></i>
        انتخاب خودرو
      </span>
      <input type="text" placeholder="جست و جو" onChange={(text: any) => setQuery(text.target.value)}/>

      {current ?
        <>
          <span className={helper.carPickerSecondary}>{current.title}</span>

          <div className={helper.carPickerFinal}>
            {data?.length > 0 && list()}
          </div>
          <span
            className={helper.carPickerRemove}
            onClick={() => {
              setSelected(undefined);
              setCurrent(undefined);
            }}
          >پاک کردن</span>
          <button className={helper.carPickerButton} onClick={send} >ثبت درخواست</button>
        </>
        :
        <>
          <section className={helper.carPickerList}>
            {data?.length > 0 && list()}
          </section>
        </>
          }
    </div>
  )
};

export default CarPicker;
