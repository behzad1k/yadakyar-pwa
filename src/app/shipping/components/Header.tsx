"use client"
import icon from "@/styles/icons.module.scss";
import shipping from "@/styles/shipping.module.scss";
import { useRouter } from 'next/navigation';

const ShippingHeader = ({ step, setStep }: any) => {
  const router = useRouter();

  return (
    <>
      <section className={shipping.header}>
        <a href='tel:02135000424'>
          <i className={icon.headphoneOrange} />
          <span>
            به پشتیبانی نیاز دارم
          </span>
        </a>
        <i className={icon.chevronLeftOrange} onClick={() => step == 1 ? router.back() : setStep(1)}/>
      </section>
    </>
  )
}

export default ShippingHeader;