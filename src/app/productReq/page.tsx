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
    [tabEnum.ProductReq.order]: 'دریافت شده',
    [tabEnum.ProductReq.request]: 'در انتظار ارسال',
  }
  // مبلغ 2300000 هزار تومان از کاربر golahmad2626 در ساعت 12:45 دقیقه دیروز دریافت شد
  const requestList = () => {
    const rows: ReactElement[] = [];
    const newlist = [
      {
        title: 'hi',
        date: "2023/12/28",
        second: 1200000
      }
    ]
    newlist?.map((request: any, index) => {
      rows.push(
          <div className={productReq.inQueueItemDropdown} onClick={(e: any) => e.currentTarget.children[1].style.display = e.currentTarget.children[1].style.display == 'flex' ? 'none' : 'flex'}>
            <div className={productReq.inQueueItem}>
              <span className={productReq.inQueueItemTitle}>
                مبلغ ۱۲۰۰۰۰۰ افغانی دریافت به صورت نقدی در هرات توسط دوشنبه مرادی به شماره پاسپورت P2383200
                <small>{request.date}</small>
              </span>
              <span className={productReq.inQueueItemStatus}>اتمام</span>
            </div>
            <div className={productReq.inQueueDets}>
              <span className={productReq.inQueueCar}>{request.title}</span>
              <span className={productReq.inQueueProduct}>
                {tools.formatPrice(request.second)} افغانی
              </span>
            </div>
          </div>
      )
    })

    return rows;
  }

  const orderList = () => {
    const rows: ReactElement[] = [];
    const newlist = [
      {
        title: 'hi',
        date: "2023/12/28",
        second: 'hey',
        price: 2300000
      }
    ]
    newlist?.map((order: any, index) => {
      rows.push(
        <div className={productReq.finishedItemDropdown} onClick={(e: any) => e.currentTarget.children[1].style.display = e.currentTarget.children[1].style.display == 'flex' ? 'none' : 'flex'}>
          <div className={productReq.finishedItem}>
            <span className={productReq.finishedItemTitle}>
مبلغ 2300000 هزار تومان از کاربر golahmad2626 در ساعت 12:45 دقیقه دیروز دریافت شد
              <small>{order.date}</small>
            </span>
            <span className={productReq.finishedItemStatus}>اتمام</span>
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
          در انتظار ارسال
        </span>
        <span className={tab == tabEnum.ProductReq.order ? productReq.active : ''} onClick={() => setTab(tabEnum.ProductReq.order)}>
          <small>{data?.orders?.length}</small>
          ارسال شده
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
