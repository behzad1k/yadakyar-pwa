"use client"
import { popupSlice } from '@/services/reducers';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

const Logout = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();

  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('orderToken');
    dispatch(popupSlice.hide());
    router.push('/home');
  }

  return(
    <button onClick={logout}>logout</button>
  )
}

export default Logout;
