"use client"
import ProductReqForm from '@/app/productReq/ProductReqForm/page';
import Header from "@/components/header/Header";
import Nav from '@/components/layout/Nav';
import tabEnum from '@/enums/tabEnum';
import { popupSlice } from '@/services/reducers';
import { setLoading } from '@/services/reducers/homeSlice';
import restApi from '@/services/restApi';
import productReq from "@/styles/productReq.module.scss";
import icon from "@/styles/icons.module.scss";
import tools from '@/utils/tools';
import moment from 'jalali-moment';
import { ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const ProductReq = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(tabEnum.ProductReq.request);
  const [data, setData] = useState<any>();
  const tabTitles = {
    [tabEnum.ProductReq.order]: 'اعلام شده',
    [tabEnum.ProductReq.request]: 'در انتظار قیمت',
  }

  const requestList = () => {
    const rows: ReactElement[] = [];

    data?.requests?.map((request: any, index) => {
      rows.push(
          <div className={productReq.inQueueItemDropdown} onClick={(e: any) => e.currentTarget.children[1].style.display = e.currentTarget.children[1].style.display == 'flex' ? 'none' : 'flex'}>
            <div className={productReq.inQueueItem}>
              <span className={productReq.inQueueItemTitle}>
                {` درخواست ${ ++index }`}
                <small>{moment(request.date).format('jYYYY/jMM/jDD HH:MM')}</small>
              </span>
              <span className={productReq.inQueueItemStatus}>در حال بررسی</span>
            </div>
            <div className={productReq.inQueueDets}>
              <span className={productReq.inQueueCar}>{request.carTitle}</span>
              <span className={productReq.inQueueProduct}>
                {request.productTitle}
              </span>
            </div>
          </div>
      )
    })

    return rows;
  }

  const orderList = () => {
    const rows: ReactElement[] = [];

    data?.orders?.map((order: any, index) => {
      rows.push(
        <div className={productReq.finishedItemDropdown} onClick={(e: any) => e.currentTarget.children[1].style.display = e.currentTarget.children[1].style.display == 'flex' ? 'none' : 'flex'}>
          <div className={productReq.finishedItem}>
            <span className={productReq.finishedItemTitle}>
              {` درخواست ${++index}`}
              <small>{moment(order.date).format('jYYYY/jMM/jDD HH:MM')}</small>
            </span>
            <span className={productReq.finishedItemStatus}>{order.price > 0 ? 'اعلام قیمت' : 'در انتظار قیمت دهی'}</span>
          </div>

          <div className={productReq.finishedProduct}>
            <i className={icon.plusOrange}/>
            <div className={productReq.finishedProductDetail}>
              <p>{order.productTitle}</p>
              <span>{order.price > 0 ? `تومان ${tools.formatPrice(order.price)}` : 'در حال بررسی'} </span>
            </div>
          </div>
        </div>
      )
    })

    return rows;
  }
  const fetchData = async () => {
    dispatch(setLoading(true));

    const res = await restApi(process.env.BASE_URL + '/v1/request/', true).get()

    setData(res.data);

    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={productReq.main}>
      <Header />
      <span className={productReq.newReq} onClick={() => dispatch(popupSlice.full(<ProductReqForm />))}>
        <i className={icon.plusOrange}></i>
        استعلام قیمت جدید
      </span>

      <div className={productReq.tabs} >
        <span className={tab == tabEnum.ProductReq.request ? productReq.active : ''} onClick={() => setTab(tabEnum.ProductReq.request)}>
          <small>{data?.requests?.length}</small>
          در انتظار قیمت
        </span>
        <span className={tab == tabEnum.ProductReq.order ? productReq.active : ''} onClick={() => setTab(tabEnum.ProductReq.order)}>
          <small>{data?.orders?.length}</small>
          اعلام شده
        </span>
      </div>
      {tab === tabEnum.ProductReq.request ?
        <div className={productReq.inQueue}>
          {requestList()}
        </div> :
        <div className={productReq.finished}>
          {orderList()}
        </div>
      }
      <Nav />
    </main>
  );
};

export default ProductReq;
