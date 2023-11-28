"use client"
import restApi from '@/services/restApi';
import Product from "@/styles/product.module.scss";
import { ReactElement, useState } from 'react';

const Form = ({ product, chunk, stock = 1 }) => {
  const [selected, setSelected] = useState(chunk[0] || undefined);
  console.log(product);
  const addToBasket = async () => {
    const res = await restApi('https://yadakyar.com/api/v1/basket/add/', true, true).post({
      stock: stock,
      chunk: selected.id,
      product: product.id,
    })
  };
  const list = () => {
    const rows: ReactElement[] = [];

    chunk.map((e: any) => {
      rows.push(
          <label className={e.id === selected.id ? Product.infoColorSelected : ''}>
            <input type="radio" checked={e.id === selected.id} onClick={() => setSelected(e)}/>
          </label>
      )
    });

    return rows;
  }

  return (
    <>
      <div className={Product.infoColor}>
        <span>رنگ:</span>
        <span>{selected.title}</span>
        {list()}
      </div>
      <div className={Product.infoAttribute}>
        <span>سایز:</span>
        <label className={Product.infoAttributeSelected}>۱۲ سانتی متر</label>
        <label>۱۲ سانتی متر</label>
        <label>۱۲ سانتی متر</label>
        <label>۱۲ سانتی متر</label>
        <label>۱۲ سانتی متر</label>
      </div>
      <div className={Product.fixBtnBackground}>
        <button className={Product.addToCartBtn} onClick={addToBasket}>فزودن به سبد خرید</button>
        <div className={Product.priceBox}>
          <span>{product.price} تومان</span>
          <s>۲۳,۲۰۰,۰۰۰ تومان</s>
        </div>
      </div>
    </>
  )

}


export default Form;
