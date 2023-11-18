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
        <section className={shipping.addresses}>
          <strong>آدرس خود را انتخاب کنید</strong>
          <div className={shipping.addressesCarousel}>
            <div className={shipping.addressesAddNew}>
              <i className={icon.plusOrangeBig}/>
            </div>
            <AddressCard/>
            <AddressCard/>
            <AddressCard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default Shipping;