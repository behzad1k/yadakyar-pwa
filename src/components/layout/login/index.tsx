"use client"
import { homeSlice, popupSlice } from '@/services/reducers';
import restApi from '@/services/restApi';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const Login = () => {
  const [otp, setOtp] = useState('11870');
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('09939160502');
  const dispatch: any = useDispatch();

  const login = async () => {
    dispatch(homeSlice.setLoading(true));

    const res = await restApi('http://localhost:8080/api/v1/login').post({
      mobile: phone
    });

    if(!res.error){
      setStep(prevState => prevState + 1);
      toast('کد با موفقیت برای شما ارسال شد.', { type: 'success' });
    }else{
      toast('خطایی رخ داده است. لطفا مجددا تلاش کنید.', { type: 'success' });
      console.log(res);
    }

    dispatch(homeSlice.setLoading(false));
  }

  const verify = async () => {
    dispatch(homeSlice.setLoading(true));

    const res = await restApi('http://localhost:8080/api/v1/verify').post({
      mobile: phone,
      code: otp
    });

    if(!res.error){
      Cookies.set('token',res.data.token);
      toast('شما با موفقیت وارد شدید', { type: 'success' });
      setStep(prevState => prevState + 1);
      handleStep();
    }else{
      toast('خطایی رخ داده است. لطفا مجددا تلاش کنید.', { type: 'success' });
      console.log(res);
    }

    dispatch(homeSlice.setLoading(false));
  }

  const handleStep = () => {
    if (step == 1){
      login();
    }
    else if (step == 2){
      verify();
    }
    else {
      dispatch(popupSlice.hide())
    }
  }

  return (
    <div>
      <div >
        <img src="/public/logo.png" alt="" />
      </div>
      <strong >ورود | ثبت نام</strong>
      {step == 1 ?
        <>
          <p>شماره موبایل خود را وارد کنید</p>
          <input type='tel' value={phone} onChange={(text: any) => setPhone(text.target.value)}/>
        </> :
        <>
          <p>شماره موبایل خود را وارد کنید</p>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
        </>
      }
      <button onClick={handleStep}>
        {step == 1 ? 'دریافت کد' : 'ورود'}
      </button>
    </div>
  );
};

export default Login;
