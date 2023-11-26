import icon from "@/styles/icons.module.scss";
import shipping from "@/styles/shipping.module.scss";

const FinalMessage = () => {
  return (
    <main className={shipping.finalMessage}>
      <i className={icon.checkedBigWhite} />
      <span>ثبت سفارش با موفقیت انجام شد</span>
      <p>
        شماره سفارش شما <span>۲۳۹۸۷۴۳</span> میباشد.
        <p>برای پیگیری به قسمت سفارشات من در پروفایل مراجعه کنید</p>
      </p>
      <button>بازگشت به صفحه اصلی</button>
    </main>
  );
};

export default FinalMessage;
