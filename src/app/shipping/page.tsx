import Header from "@/components/header/Header";
import icon from "@/styles/icons.module.scss";
import shipping from "@/styles/shipping.module.scss";
import helper from "@/styles/helpers.module.scss";
import ShippingHeader from "@/app/shipping/components/Header";
import AddressCard from "@/app/shipping/components/AddressCard";

const Shipping = () => {
  return (
    <>
      <ShippingHeader/>
      <main className={shipping.body}>
        <section className={shipping.progressBar}>
          <div className={shipping.progressBarIcons}>
            <div>
              <i className={icon.shippingProgressChecked}/>
            </div>
            <span>----------</span>
            <div>
              <i className={icon.shippingProgressCurrent}/>
            </div>
            <span>----------</span>
            <div>
              <i className={icon.shippingProgressNext}/>
            </div>
          </div>
          <div className={shipping.progressBarTitles}>
              <span>
                تایید سبد خرید
              </span>
            <span>
                انتخاب آدرس و روش ارسال
              </span>
            <span>
                مشاهده فاکتور و پرداخت
              </span>
          </div>
        </section>
        {/*<section className={shipping.addresses}>*/}
        {/*  <strong>آدرس خود را انتخاب کنید</strong>*/}
        {/*  <div className={shipping.addressesCarousel}>*/}
        {/*    <div className={shipping.addressesAddNew}>*/}
        {/*      <i className={icon.plusOrangeBig}/>*/}
        {/*    </div>*/}
        {/*    <AddressCard/>*/}
        {/*    <AddressCard/>*/}
        {/*    <AddressCard/>*/}
        {/*  </div>*/}
        {/*</section>*/}
        {/*<section className={shipping.method}>*/}
        {/*  <strong>روش ارسال را انتخاب کنید</strong>*/}
        {/*  <div className={shipping.methodSelect}>*/}
        {/*    <div className={shipping.methodSelected}>*/}
        {/*      <div className={shipping.methodSelectIcon}>*/}
        {/*        <i className={icon.postLogoSelected}/>*/}
        {/*      </div>*/}
        {/*      <span>*/}
        {/*        پست پیشتاز*/}
        {/*        <small>ارسال ۲ تا ۴ روز کاری</small>*/}
        {/*      </span>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <div className={shipping.methodSelectIcon}>*/}
        {/*        <i className={icon.transportCar}/>*/}
        {/*      </div>*/}
        {/*      <span>*/}
        {/*        وانت*/}
        {/*        <small>ارسال تا ۱ روز کاری</small>*/}
        {/*      </span>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <div className={shipping.methodSelectIcon}>*/}
        {/*        <i className={icon.tipaxLogo}/>*/}
        {/*      </div>*/}
        {/*      <span>*/}
        {/*        تیپاکس*/}
        {/*        <small>تا ۲۴ ساعت تهران و ۷۲ ساعت شهرستان</small>*/}
        {/*      </span>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <div className={shipping.methodSelectIcon}>*/}
        {/*        <i className={icon.transportMotor}/>*/}
        {/*      </div>*/}
        {/*      <span>*/}
        {/*        پیک موتوری*/}
        {/*        <small>فقط استان تهران</small>*/}
        {/*      </span>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
        <section>
          <strong>روش پرداخت را انتخاب کنید</strong>

        </section>

        <section className={shipping.bankInfo}>
          <strong>مشخصات حساب</strong>
          <div className={shipping.bankInfoCopy}>
            <i className={icon.copy}/>
            <span>6274-8749-9233-9753</span>
          </div>
          <div className={shipping.bankInfoCopy}>
            <i className={icon.copy}/>
            <span>IR870004276987630533794502</span>
          </div>
          <div className={shipping.bankInfoOwner}>بنام محمدرضا فخر مقدم / بانک اقتصاد نوین</div>
          <div className={shipping.bankInfoNotice}>
            <i className={icon.info}/>
            <p>برای اعلام واریز، با داشتن شماره پیگیری واریز با شماره <span>۰۲۱۳۳۰۰۰۳۴۴</span> تماس بگیرید</p>
          </div>
        </section>
        <section className={shipping.bill}>
          <strong>جزئیات فاکتور</strong>
          <div>
            <span>مبلغ سفارش(۹ آیتم)</span>
            <span>۲۳,۲۰۰,۰۰۰ تومان</span>
          </div>
          <div>
            <span>هزینه ارسال</span>
            <span>۰ تومان</span>
          </div>
          <div>
            <span>مالیات</span>
            <span>۱۲,۰۰۰ تومان</span>
          </div>
          <div>
            <span>تخفیف</span>
            <span>۵۰,۰۰۰ - تومان</span>
          </div>
          <div>
            <span>مبلغ قابل پرداخت</span>
            <span>۲۳,۲۱۲,۰۰۰ تومان</span>
          </div>
        </section>
      </main>
    </>
  )
}

export default Shipping;