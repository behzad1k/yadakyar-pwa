import Header from "@/components/header/Header";
import icon from "@/styles/icons.module.scss";
import shipping from "@/styles/shipping.module.scss";
import helper from "@/styles/helpers.module.scss";


const ShippingHeader = () => {
  return (
    <>
      <section className={shipping.header}>
        <div>
          <i className={icon.headphoneOrange}/>
          <span>
            به پشتیبانی نیاز دارم
          </span>
        </div>
        <i className={icon.chevronLeftOrange}/>
      </section>
    </>
  )
}

export default ShippingHeader;