"use client"
import ProductSecondary from '@/components/cards/ProductSecondary';
import Nav from '@/components/layout/Nav';
import globalEnum from '@/enums/globalEnum';
import { popupSlice } from '@/services/reducers';
import restApi from '@/services/restApi';
import search from "@/styles/search.module.scss";
import icon from "@/styles/icons.module.scss";
import Header from "@/components/header/Header";
import { ReactElement, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

const Search = () => {
  const dispatch: any = useDispatch();
  const [data, setData] = useState<any>({});
  const [query, setQuery] = useState('');

  const products = () => {
    const rows: ReactElement[] = [];

    data?.product?.map((product: any, index: number) => rows.push(
      <ProductSecondary id={product.id} key={'product' + index} title={product.title} price={product.price} img={product.gallery[0]?.original} url={product.url}/>
    ));

    return rows;
  }

  const resultItem = (type: string) => {
    const rows: ReactElement[] = [];

    data[type]?.map((item: any, index: number) => rows.push(
      <span className={search.resultsItem} key={item.title + index}>{item.title}</span>
    ));

    return rows;
  }

  const fetchData = async () => {
    const res = await restApi('http://localhost:8080/api/v1/search').get({
      query: query
    })

    if (!data.error){
      setData(res.data);
    }
  }

  useEffect(() => {
    if (query.length) {
      fetchData();
    }
  }, [query]);

  return (
    <main>
      <Header onBack={() => dispatch(popupSlice.hide())} query={query} setQuery={setQuery}/>
      <section className={search.results}>
        {/* {query.length < 1 && */}
        {/*   // <div className={search.suggest}> */}
            {/* <a href="#"> */}
            {/*   <div className={search.suggestCard}> */}
            {/*     <div className={search.suggestCardImg}> */}
            {/*       <img src="/temp/searchsuggesttemp.svg" alt="" /> */}
            {/*     </div> */}
            {/*     <span className={search.suggestCardTitle}>لگو/اسباب بازی</span> */}
            {/*   </div> */}
            {/* </a> */}
          {/* // </div> */}
        {/* // } */}
        {data?.product?.length > 0 &&
          <div className={search.resultsScroll}>
            {products()}
          </div>
        }
        {data?.category?.length > 0 &&
          <div className={search.resultsScroll}>
            <span className={search.resultsTitle}>
              <i className={icon.category} />
              دسته‌بندی
            </span>
            {resultItem(globalEnum.SearchType.category)}
          </div>
        }
        {data?.car?.length > 0 &&
          <div className={search.resultsScroll}>
          <span className={search.resultsTitle}>
            <i className={icon.car} />
            خودرو
          </span>
          {resultItem(globalEnum.SearchType.car)}
          </div>
        }
        {data?.company?.length > 0 &&
          <div className={search.resultsScroll}>
          <span className={search.resultsTitle}>
            <i className={icon.sparePart} />
            برند قطعه
          </span>
          {resultItem(globalEnum.SearchType.company)}
        </div>
        }
        {/* <div className={search.resultsScroll}> */}
        {/*   <span className={search.resultsTitle}> */}
        {/*     <i className={icon.factory} /> */}
        {/*     سازنده خودرو */}
        {/*   </span> */}
        {/*   <span className={search.resultsItem}>فیلتر اتاق</span> */}
        {/* </div> */}
      </section>
      <Nav />
    </main>
  );
};

export default Search;
