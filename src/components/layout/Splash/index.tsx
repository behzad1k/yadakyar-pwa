"use client"
import { cart } from '@/services/reducers/cartSlice';
import { setLoading } from '@/services/reducers/homeSlice';
import { addresses, favorites, profile } from '@/services/reducers/userSlice';
import restApi from '@/services/restApi';
import tools from '@/utils/tools';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Splash = () => {
  const dispatch: any = useDispatch();

  const getOrderToken = async () => {
    const res = await restApi(process.env.BASE_URL + '/v1/getLastOrder/', true).get();

    if (!res.error && res.data.token){
      Cookies.set('order-token', res.data.token);
    }
  };
  const fetchData = async () => {
    if (Cookies.get('token')) {
      dispatch(setLoading(true));

      const res = await restApi(process.env.BASE_URL + '/v1/profile/', true).get();

      if (!tools.isEmpty(res) && !res.error) {
        await getOrderToken();
        dispatch(profile());
        dispatch(addresses());
        dispatch(favorites());
        dispatch(cart());
      } else if (!tools.isEmpty(res)){
        Cookies.remove('token');
      }

      dispatch(setLoading(false));
    }

  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    </>
  )
}

export default Splash;
