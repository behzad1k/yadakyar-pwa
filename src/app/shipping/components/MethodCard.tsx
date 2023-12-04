import Header from "@/components/header/Header";
import icon from "@/styles/icons.module.scss";
import shipping from "@/styles/shipping.module.scss";
import helper from "@/styles/helpers.module.scss";
import ShippingHeader from "@/app/shipping/components/Header";
import AddressCard from "@/app/shipping/components/AddressCard";
import { ReactElement, useEffect, useState } from "react";

const MethodCard = ({
  title,
  description,
  logo,
  methodSelected,
  onClick
}: {
  title: string;
  description: string;
  logo?: string;
  methodSelected: any;
  onClick: () => void; 
}) => {
  const [isSelected, setIsSelected] = useState();
  useEffect(() => {
    setIsSelected(methodSelected);
  }, [methodSelected]);

  return (
    <div
      className={isSelected && shipping.methodSelected}
      onClick={onClick}
    >
      <div className={shipping.methodSelectIcon}>
        <i className={icon.postLogoSelected} />
      </div>
      <span>
        {title}
        <small>{description}</small>
      </span>
    </div>
  );
};

export default MethodCard;
