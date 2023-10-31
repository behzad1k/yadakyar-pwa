import category from "@/styles/category.module.scss";
import icon from "@/styles/icons.module.scss";
import search from "@/styles/search.module.scss";
import Modal from "./modal";

const Category = () => {
  return (
    <>
      <section className={search.head}>
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
              <i className={icon.chevronBot} />
            </span>
            <span>
              <i className={icon.filter} />
              فیلترها
              <i className={icon.chevronBot} />
            </span>
            <span>
              قیمت
              <i className={icon.chevronBot} />
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
            <h1>لاستیک</h1>
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
        <Modal>
          <div className={category.filterModal}>
            <span>فیلتر ها</span>
            <div className={category.filterModalDropdown}>برند</div>
            <div className={category.filterModalDropdown}>ارتفاع</div>
            <div className={category.filterModalDropdown}>جهت</div>
            <button>مشاهده نتیجه</button>
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
            <button>مشاهده نتیجه</button>
          </div>
        </Modal>
      </main>
    </>
  );
};

export default Category;
