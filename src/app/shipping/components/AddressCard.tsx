import icon from "@/styles/icons.module.scss";
import shipping from "@/styles/shipping.module.scss";
import ShippingHeader from "@/app/shipping/components/Header";


const AddressCard = () => {
  return (
    <div className={shipping.addressCard}>
      {/*"addressCard" this class is for those not selected*/}
      <div className={shipping.addressCardHead}>
        <i className={icon.checkBoxRoundChecked}/>
        {/*"checkBoxRound" this class is for those not selected*/}
        <strong>دفتر کار</strong>
        <i className={icon.options}/>
      </div>
      <p>
        تهران ، خیابان امام خمینی ، میدان امام خمینی ،خیابان شیخ هادی ، کوچه ارجمند ، پلاک ۲۳ ، واحد ۲
      </p>
      <span>۰۹۱۲۳۴۳۵۶۷۷</span>
    </div>
  )
}

export default AddressCard;