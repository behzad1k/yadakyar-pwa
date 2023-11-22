import Header from "@/components/header/Header";
import TitleHeader from "@/components/header/TitleHeader";
import icon from "@/styles/icons.module.scss";
import faq from "@/styles/faq.module.scss";
import helper from "@/styles/helpers.module.scss";

const Faq = () => {
  return (
    <>
      <TitleHeader />
      <main className={faq.main}>
        <div className={faq.search}>
          <input type="text" placeholder="جست و جو موضوع" />
        </div>
        <div className={helper.dropdown}>
          <input type="checkbox" id="dropdownInput" />
          <label htmlFor="dropdownInput">
            <strong>قوانین کلی سایت یدکیار</strong>
          </label>
          <p className={helper.dropdownContent}>
            در زمان تحویل کالا فاکتور به همراه قطعه به شماارئه میشود. آیا فاکتور
            یدک یار قابل استفاده برای دریافتخسارت از بیمه هست؟ بله، توجه داشته
            باشید یدک یار قیمت نهایی فاکتورارائه شده را به درخواست مشتری برای
            دریافتخسارت بیشتر از شرکت های بیمه افزایش نمیدهد. چگونه میتوانید
            کالایی که در سایت وجود ندارد راسفارش دهیم؟ در صورتی که نتوانستید
            قطعه مدنظرتان را در سایتپیدا کنید، میتوانید با همکاران ما در واحد
            فروشیدک یار تماس بگیرید تا سفارش شما ثبت و پیگیریشود. برای خرید از
            یدک یار باید حتما عضو سایت شوم؟ ثبت نام برای خرید قطعه از یدک یار
            الزامیست. لذاثبت نام باید توسط خود شما یا همکاران ما صورتپذیرد. در
            صورتی که امکان ثبت نام برای شما فراهمنبود میتوانید هنگام ثبت سفارش
            از همکاران مابخواهید تا این کار را برای شما انجام دهند. آیا امکان
            افزودن قطعه به فاکتور پس از نهاییسازی سفارش وجود دارد؟ در صورتی که
            قطعه شما ارسال نشده باشد میتوانیدپس از تماس با بخش فروش یدک یار،
            قطعه جدید رابه فاکتور خود اضافه کنید. میتوانم سفارش را تلفنی ثبت
            کنم؟ بله
          </p>
        </div>
      </main>
    </>
  );
};

export default Faq;
