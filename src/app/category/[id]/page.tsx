import Header from '@/components/header/Header';
import Nav from '@/components/layout/Nav';
import icon from "@/styles/icons.module.scss";
import category from "@/styles/category.module.scss";
import helper from "@/styles/helpers.module.scss";
import { fetchData } from "./builder";
import { ReactElement } from "react";
import Filters from "@/app/category/[id]/components/Filters";
import { ProductCard } from "./components/ProductCard";

const Category = async ({ params, searchParams }: any) => {
  let pathname = '?';
  Object.entries(searchParams).forEach(([key, value], index) => pathname += key + '=' + value)
  const res = await fetchData(pathname?.split('?')[1] || '', params.id);
  const cat = res.data;

  const productList = () => {
    const rows: ReactElement[] = [];

    cat.products.slice(0, 10).map((product, index) =>
      rows.push(
        <ProductCard
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

  const superCatList = () => {
    const rows: ReactElement[] = [];

    cat.products.slice(0, 10).map((product, index) =>
      rows.push(
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
      )
    );

    return rows;
  };

  return (
    <>
      <Header />
      <main className={category.main}>
        <section className={category.head}>
          <div className={category.headBanner}>
            <img src={cat.category.image} alt="" />
          </div>
          <Filters/>
        </section>
        <section className={category.shortcuts}>
          {/* {superCatList()} */}
        </section>
        <section className={category.products}>
          <div className={category.productsHead}>
            <h1>{cat.category.title}</h1>
            <small>({cat.products.length}+ محصول)</small>
          </div>
          <div className={category.productsHead}>
            <span>فقط کالاهای موجود</span>
            <i className={icon.switchOff} />
          </div>
          {productList()}
        </section>
        <Nav />
      </main>
    </>
  );
};

export default Category;
