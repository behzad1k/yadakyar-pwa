"use client";
import Header from "@/components/header/Header";
import icon from "@/styles/icons.module.scss";
import shipping from "@/styles/shipping.module.scss";
import helper from "@/styles/helpers.module.scss";
import ShippingHeader from "@/app/shipping/components/Header";
import AddressCard from "@/app/shipping/components/AddressCard";
import { useState } from "react";
import AddressStep from "./steps/AddressStep";
import PaymentStep from "./steps/PaymentStep";

const Shipping = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <ShippingHeader />
      {step == 1 ? <AddressStep setStep={setStep} /> : <PaymentStep />}
    </>
  );
};

export default Shipping;
