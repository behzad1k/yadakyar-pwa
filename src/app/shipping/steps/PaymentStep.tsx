"use client"
import restApi from '@/services/restApi';
import { useAppSelector } from '@/services/store';
import icon from "@/styles/icons.module.scss";
import shipping from "@/styles/shipping.module.scss";
import tools from '@/utils/tools';
import { ReactElement, useEffect, useState } from 'react';

const PaymentStep = ({ setPayment, payment }: any) => {
  const cartReducer = useAppSelector(state => state.cartReducer.cart);
  const [showBankInfo, setShowBankInfo] = useState(true);
  const [paymentTypes, setPaymentTypes] = useState([]);

  const copyAddress = (text: string) => {
    navigator.clipboard.writeText(text);
  }

  const list = () => {
    const rows: ReactElement[] = [];

    paymentTypes.map((paymentType: any, index) =>
    rows.push(
      <div className={shipping.methodSelect} key={'paymentType' + index} onClick={() => setPayment(paymentType)}>
        <div className={payment?.id === paymentType.id ? shipping.methodSelected : ''}>
            <div className={payment?.id === paymentType.id ? shipping.methodSelectIcon : ''}>
              <i className={icon.postLogoSelected} />
            </div>
          <span>
                {paymentType.title}
                <small>ارسال ۲ تا ۴ روز کاری</small>
              </span>
        </div>
      </div>
    ));

    return rows;
  }

  const fetchPaymentTypes = async () => {
    const res = await restApi(process.env.BASE_URL + '/v1/paymentType/').get();

    if (!res.error){
      setPaymentTypes(res.data);
    }
  };

  useEffect(() => {
    fetchPaymentTypes()
  }, []);

  return (
    <main className={shipping.body}>
      <section className={shipping.progressBar}>
        <div className={shipping.progressBarIcons}>
          <div>
            <i className={icon.shippingProgressChecked} />
          </div>
          <span>----------</span>
          <div>
            <i className={icon.shippingProgressChecked} />
          </div>
          <span>----------</span>
          <div>
            <i className={icon.shippingProgressCurrent} />
          </div>
        </div>
        <div className={shipping.progressBarTitles}>
          <span>تایید سبد خرید</span>
          <span>انتخاب آدرس و روش ارسال</span>
          <span>مشاهده فاکتور و پرداخت</span>
        </div>
      </section>
      <section>
        <strong>روش پرداخت را انتخاب کنید</strong>
        <div className={shipping.paymentMethodCarousel}>
          {list()}
        </div>
      </section>
      {showBankInfo && (
        <section className={shipping.bankInfo}>
          <strong>مشخصات حساب</strong>
          <div className={shipping.bankInfoCopy} onClick={() => copyAddress('6274874992339753')}>
            <i className={icon.copy} />
            <span>6274-8749-9233-9753</span>
          </div>
          <div className={shipping.bankInfoCopy} onClick={() => copyAddress('IR870004276987630533794502')}>
            <i className={icon.copy} />
            <span>IR870004276987630533794502</span>
          </div>
          <div className={shipping.bankInfoOwner}>
            بنام محمدرضا فخر مقدم / بانک اقتصاد نوین
          </div>
          <div className={shipping.bankInfoNotice}>
            <i className={icon.info} />
            <p>
              برای اعلام واریز، با داشتن شماره پیگیری واریز با شماره{" "}
              <span>۰۲۱۳۳۰۰۰۳۴۴</span> تماس بگیرید
            </p>
          </div>
        </section>
      )}
      <section className={shipping.bill}>
        <strong>جزئیات فاکتور</strong>
        <div>
          <span>مبلغ سفارش({cartReducer?.totalProduct} آیتم)</span>
          <span>{tools.formatPrice(cartReducer?.sumProductPrice)} تومان</span>
        </div>
        <div>
          <span>هزینه ارسال</span>
          <span>{tools.formatPrice(cartReducer?.sendCost)} تومان</span>
        </div>
        <div>
          <span>مالیات</span>
          <span>0 تومان</span>
        </div>
        <div>
          <span>تخفیف</span>
          <span>{tools.formatPrice(cartReducer?.sumDiscountPrice)} تومان - </span>
        </div>
        <div>
          <span>مبلغ قابل پرداخت</span>
          <span>{tools.formatPrice(cartReducer?.payable)} تومان</span>
        </div>
      </section>
    </main>
  );
};

export default PaymentStep;
