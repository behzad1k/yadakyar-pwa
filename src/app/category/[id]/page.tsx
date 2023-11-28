import icon from "@/styles/icons.module.scss";
import category from "@/styles/category.module.scss";
import helper from "@/styles/helpers.module.scss";
import { fetchData } from "./builder";
import { ReactElement } from "react";
import { ProductPrimary } from "@/components/cards/ProductPrimary";
import Filters from "@/app/category/[id]/components/Filters";
// import Modal from "./Modal";

const Category = async ({ params, searchParams }: any) => {
  let pathname = '?';
  Object.entries(searchParams).forEach(([key, value], index) => pathname += key + '=' + value)
  const res = await fetchData(pathname?.split('?')[1] || '', params.id);
  const cat = res.data;
  
  const productList = () => {
    const rows: ReactElement[] = [];

    cat.products.slice(0, 10).map((product, index) =>
      rows.push(
        <ProductPrimary
          key={index}
          title={product.title}
          price={product.price}
          img={product.gallery[0]?.original}
          discount={product.discount}
          oldPrice={product.oldPrice}
          id={product.id}
        />
      )
    );

    return rows;
  };


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
          <Filters/>

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
            {/* <h1>{categoryTitle}</h1> */}
            <small>(۱۰۰۰+ محصول)</small>
          </div>
          <div className={category.productsHead}>
            <span>فقط کالاهای موجود</span>
            <i className={icon.switchOff} />
          </div>
          {productList()}
        </section>
        {/* <Modal>

        {/* <Modal>
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
