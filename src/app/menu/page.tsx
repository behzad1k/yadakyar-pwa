"use client"
import restApi from '@/services/restApi';
import menu from "@/styles/menu.module.scss";
import Header from "@/components/header/Header";
import { useRouter } from 'next/navigation';
import { ReactElement, useEffect, useState } from 'react';

const Menu = () => {
  const [data, setData] = useState<any[]>([]);
  const rootParent = { title: 'دسته بندی ها', id: 0, parent: -1 }
  const [current, setCurrent] = useState(rootParent);
  const router = useRouter();
  
  const list = () => {
    const rows: ReactElement[] = [];

    data.filter((e: any) => e.parent == current.id).map((menu: any, index) => rows.push(
      <a
        onClick={() => data.filter((e: any) => e.parent == menu.id).length > 0 ? setCurrent(menu) : router.push(`/category/${menu.id}`)}
        key={index}
      >{menu.title}</a>
    ));

    return rows;
  }

  const fetchData = async () => {
    const res = await restApi('https://yadakyar.com/api/v1/menu/').get();

    setData(Object.values(res.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={menu.main}>
     <Header onBack={() => setCurrent(data.find((e: any) => e.id == current.parent) || rootParent)}/>
      <section className={menu.body}>
        <span className={menu.title}>{current.title}</span>
        {data.length > 0 && list()}
      </section>
    </main>
  );
};

export default Menu;
