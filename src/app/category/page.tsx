import category from "@/styles/category.module.scss";
import icon from "@/styles/icons.module.scss";
import search from "@/styles/search.module.scss";
import helper from "@/styles/helpers.module.scss";
import { fetchData } from "./builder";
// import Modal from "./Modal";

const Category = async () => {
  const res = await fetchData();
  console.log(res);
  const categoryTitle = res.data;
  console.log(categoryTitle);

  return (
    <>
      <section className={helper.header}>
        <i className={icon.headphone}></i>
        <form action="">
          <input type="text" placeholder="جست و جو" />
        </form>
        <i className={icon.chevronLeft}></i>
      </section>
      <main className={category.main}>
        <section className={category.head}>
          <div className={category.headBanner}>
            <img src="/temp/categorybannertemp.png" alt="" />
          </div>
          <div className={category.filters}>
            <span>
              <i className={icon.addCar} />
              انتخاب خودرو
              <i className={icon.chevronDown} />
            </span>
            <span>
              <i className={icon.filter} />
              فیلترها
              <i className={icon.chevronDown} />
            </span>
            <span>
              قیمت
              <i className={icon.chevronDown} />
            </span>
          </div>
        </section>
        <section className={category.shortcuts}>
          <div className={category.shortcutsCard}>
            <a className={category.shortcutsImg} href="#">
              <img src="/temp/categorytemp.png" alt="" />
            </a>
            <a href="#">
              <h2 className={category.shortcutsTitle}>
                پایه فیلتر روغن پژو 2008 پژو
              </h2>
            </a>
          </div>
          <div className={category.shortcutsCard}>
            <a className={category.shortcutsImg} href="#">
              <img src="/temp/categorytemp.png" alt="" />
            </a>
            <a href="#">
              <h2 className={category.shortcutsTitle}>
                پایه فیلتر روغن پژو 2008 پژو
              </h2>
            </a>
          </div>
          <div className={category.shortcutsCard}>
            <a className={category.shortcutsImg} href="#">
              <img src="/temp/categorytemp.png" alt="" />
            </a>
            <a href="#">
              <h2 className={category.shortcutsTitle}>
                پایه فیلتر روغن پژو 2008 پژو
              </h2>
            </a>
          </div>
          <div className={category.shortcutsCard}>
            <a className={category.shortcutsImg} href="#">
              <img src="/temp/categorytemp.png" alt="" />
            </a>
            <a href="#">
              <h2 className={category.shortcutsTitle}>
                پایه فیلتر روغن پژو 2008 پژو
              </h2>
            </a>
          </div>
          <div className={category.shortcutsCard}>
            <a className={category.shortcutsImg} href="#">
              <img src="/temp/categorytemp.png" alt="" />
            </a>
            <a href="#">
              <h2 className={category.shortcutsTitle}>
                پایه فیلتر روغن پژو 2008 پژو
              </h2>
            </a>
          </div>
          <div className={category.shortcutsCard}>
            <a className={category.shortcutsImg} href="#">
              <img src="/temp/categorytemp.png" alt="" />
            </a>
            <a href="#">
              <h2 className={category.shortcutsTitle}>
                پایه فیلتر روغن پژو 2008 پژو
              </h2>
            </a>
          </div>
        </section>
        <section className={category.products}>
          <div className={category.productsHead}>
            <h1>{categoryTitle}</h1>
            <small>(۱۰۰۰+ محصول)</small>
          </div>
          <div className={category.productsHead}>
            <span>فقط کالاهای موجود</span>
            <i className={icon.switchOff} />
          </div>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className={category.product}>
              <div className={category.productImg}>
                <img src="/temp/product-test.png" alt="" />
              </div>
              <h2 className={category.productTitle}>
                لاستیک 195.65.15 یزد تایر گل مرکو fh
              </h2>
              <span className={category.productPrice}>۲۳,۲۰۰,۰۰۰ تومان</span>
              <s className={category.productOldPrice}>۲۳,۲۰۰,۰۰۰ تومان</s>
              <span className={category.productDiscountPercent}>٪۳۰</span>
              <div>
                <span className={category.productTag}>ارسال فوری</span>
              </div>
            </article>
          </a>
        </section>
        {/* <Modal>
          <div className={category.filterModal}>
            <span>فیلتر ها</span>
            <div className={category.filterModalDropdown}>برند</div>
            <div className={category.filterModalDropdown}>ارتفاع</div>
            <div className={category.filterModalDropdown}>جهت</div>
            <button className={helper.wideBtn}>مشاهده نتیجه</button>
          </div>
        </Modal>
        <Modal>
          <div className={category.filterModal}>
            <span>انتخاب برند</span>
            <input type="text" placeholder="جست و جو" name="" id="" />
            <div className={category.filterModalCheck}>
              <input type="checkbox" id="ایران تایر" />
              <label htmlFor="ایران تایر">ایران تایر</label>
            </div>
            <div className={category.filterModalCheck}>
              <input type="checkbox" id="بارز" />
              <label htmlFor="بارز">بارز</label>
            </div>
            <div className={category.filterModalCheck}>
              <input type="checkbox" id="بولزوان" />
              <label htmlFor="بولزوان">بولزوان</label>
            </div>
            <div className={category.filterModalCheck}>
              <input type="checkbox" id="تری انگل" />
              <label htmlFor="تری انگل">تری انگل</label>
            </div>
            <div className={category.filterModalCheck}>
              <input type="checkbox" id="جی پلنت" />
              <label htmlFor="جی پلنت">جی پلنت</label>
            </div>
            <button className={helper.wideBtn}>مشاهده نتیجه</button>
          </div>
        </Modal> */}
      </main>
    </>
  );
};

export default Category;
