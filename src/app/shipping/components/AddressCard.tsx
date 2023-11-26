import icon from "@/styles/icons.module.scss";
import shipping from "@/styles/shipping.module.scss";
import ShippingHeader from "@/app/shipping/components/Header";

const AddressCard = ({ title, address, phone }: any) => {
  return (
    <div className={shipping.addressCard}>
      {/*"addressCard" this class is for those not selected*/}
      <div className={shipping.addressCardHead}>
        <i className={icon.checkBoxRoundChecked} />
        {/*"checkBoxRound" this class is for those not selected*/}
        <strong>{title}</strong>
        <i className={icon.options} />
      </div>
      <p>{address}</p>
      <span>{phone}</span>
    </div>
  );
};

export default AddressCard;
