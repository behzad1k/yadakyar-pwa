"use client"
import useUrlParam from '@/hooks/useUrlParam';
import restApi from '@/services/restApi';
import category from "@/styles/category.module.scss";
import helper from "@/styles/helpers.module.scss";
import { useSearchParams } from 'next/navigation';
import { ReactElement, useEffect, useState } from 'react';

const BrandModal = () => {
  const { getAll } = useSearchParams()
  const { setUrlParam, removeUrlParam } = useUrlParam();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [brands, setBrands] = useState(getAll('company[]'));

  const list = () => {
    const rows: ReactElement[] = [];
    data?.filter((carProduct: any) => carProduct.title.toLowerCase().includes(query.toLowerCase())).slice(0, 6).map((carProdcut: any, index) => {
      rows.push(
        <div className={category.filterModalCheck} onClick={() => {
          if (brands.includes(carProdcut.id)){
            setBrands(brands.filter((e: string) => e !== carProdcut.id))
            removeUrlParam('company[]', carProdcut.id);
          }else{
            setBrands(prev => [...prev, carProdcut.id]);
            setUrlParam('company[]', carProdcut.id);
          }
        }}>
          <i className={brands.includes(carProdcut.id) ? 'checkbox-active' : 'checkbox'}></i>
          <span>{carProdcut.title}</span>
        </div>
      )
    })

    return rows;
  }

  const fetchData = async () => {
    const res = await restApi('http://localhost:8080/api/v1/carProduct/').get();

    if (!res.error){
      setData(res.data);
    }

  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      <span>انتخاب برند</span>
      <input type="text" placeholder="جست و جو" onChange={(text: any) => setQuery(text.target.value)}/>
      <div className={category.filterModal}>
        {list()}
      </div>
    </>
  )
};
export default BrandModal;
