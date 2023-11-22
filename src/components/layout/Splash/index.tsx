"use client"
import { setLoading } from '@/services/reducers/homeSlice';
import { addresses, favorites, profile } from '@/services/reducers/userSlice';
import restApi from '@/services/restApi';
import tools from '@/utils/tools';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Splash = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();

  const fetchData = async () => {
    if (Cookies.get('token')) {
      dispatch(setLoading(true));

      const res = await restApi('http://localhost:8080/api/v1/profile', true).get();

      if (!tools.isEmpty(res) && !res.error) {
        dispatch(profile());
        dispatch(addresses());
        dispatch(favorites());
      } else if (!tools.isEmpty(res)){
        Cookies.remove('token');
      }

      dispatch(setLoading(false));
    }

    router.push('/home');
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
