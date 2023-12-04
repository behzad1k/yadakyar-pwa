"use client"
import { cart } from '@/services/reducers/cartSlice';
import restApi from '@/services/restApi';
import Product from "@/styles/product.module.scss";
import tools from '@/utils/tools';
import Cookies from 'js-cookie';
import { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Form = ({ product, chunk, stock = 1 }) => {
  const [selected, setSelected] = useState(chunk[0] || undefined);
  const dispatch: any = useDispatch();
  const addToBasket = async () => {
    const res = await restApi(process.env.BASE_URL + '/v1/basket/add/', true, true).post({
      stock: stock,
      chunk: selected.id,
      product: product.id,
    });

    if (!res.error){
      Cookies.set('order-token', res.data);
      dispatch(cart());
    }

    toast(res.message, { type: res.error ? 'error' : 'success' })
  };
  const list = () => {
    const rows: ReactElement[] = [];

    chunk.map((e: any) => {
      rows.push(
          <label className={e.id === selected.id ? Product.infoAttributeSelected : ''} onClick={() => setSelected(e)}>
            {e.title}
            <input type="radio" className={Product.chunkInput} checked={e.id === selected.id} />
          </label>
      )
    });

    return rows;
  }
  return (
    <>
      {/* <div className={Product.infoColor}> */}
      {/*   <span>رنگ:</span> */}
      {/*   <span>{selected.title}</span> */}
      {/*   <label className={Product.infoColorSelected}> */}
      {/*     <input type="radio" /> */}
      {/*   </label> */}
      {/* </div> */}
      <div className={Product.infoAttribute}>
        <span>شاخص:</span>
        {list()}
      </div>
      <div className={Product.fixBtnBackground}>
        <button className={Product.addToCartBtn} onClick={addToBasket}>افزودن به سبد خرید</button>
        <div className={Product.priceBox}>
          {selected.discount > 0 ?
            <>
              <span>{tools.formatPrice(selected.price)} تومان</span>
              <s>{tools.formatPrice(selected.price - selected.discount)} تومان</s>
            </>
            :
            <span>{tools.formatPrice(selected.price)} تومان</span>
          }

        </div>
      </div>
    </>
  )

}


export default Form;
