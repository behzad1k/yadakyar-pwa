import icon from "@/styles/icons.module.scss";
import shipping from "@/styles/shipping.module.scss";
import ShippingHeader from "@/app/shipping/components/Header";

const AddressCard = ({ title, address, phone, selected, onClick }: any) => {
  return (
    <div className={selected ? shipping.addressCardChecked : shipping.addressCard} onClick={onClick}>
      <div className={shipping.addressCardHead}>
        <i className={selected ? icon.checkBoxRoundChecked : shipping.checkBoxRound} />
        <strong>{title}</strong>
        <i className={icon.options} />
      </div>
      <p>{address}</p>
      <span>{phone}</span>
    </div>
  );
};

export default AddressCard;
