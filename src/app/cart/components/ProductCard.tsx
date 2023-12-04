"use client"
import restApi from '@/services/restApi';
import Cart from "@/styles/cart.module.scss";
import icon from "@/styles/icons.module.scss";
import { cart } from "@/services/reducers/cartSlice"
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const ProductCard = ({ title, img, price, stock, chunk }: any) => {
  const [stockValue, setStockValue] = useState(stock);
  const dispatch: any = useDispatch();
  const updateStockValue = async () => {
    const res = await restApi(process.env.BASE_URL + '/v1/basket/stock/', true, true).put({
      chunk: chunk,
      stock: stockValue
    });

    if(!res.error){
      toast('تعداد کالای مورد نظر با موفقیت تغییر کرد', { type: 'success' })
      dispatch(cart());
    } else {
      toast(res.message, { type: 'error' });
    }

  };

  const deleteProduct = async () => {
    const res = await restApi(process.env.BASE_URL + '/v1/basket/delete/' + chunk + '/', true, true).delete({});

    if(!res.error){
      toast('کالای مورد نظر با موفقیت از سبد خرید حذف شد', { type: 'success' });
      dispatch(cart());

    } else {
      toast(res.message, { type: 'error' });
    }
  };

  useEffect(() => {
    if (stockValue !== stock){
      updateStockValue()
    }
  }, [stockValue]);
  return (
    <article className={Cart.productCard}>
      <div className={Cart.productCardDetails}>
        <span className={Cart.productCardTitle}>{title}</span>
        <span className={Cart.productCardPrice}>{price} تومان</span>
        <div className={Cart.productCardFunc}>
          <div>
            <i className={icon.plusBlackSmall} onClick={() => setStockValue(prev => Number(prev) + 1)}/>
            <input type="number" value={stockValue} onChange={(input: any) => setStockValue(input.target.value)}/>
            <i className={icon.minus} onClick={() => setStockValue(prev => prev - 1)}/>
          </div>
          <span onClick={deleteProduct}>حذف کالا</span>
        </div>
      </div>
      <div className={Cart.productCardImg}>
        <img src={img} alt="" />
      </div>
    </article>
  );
};

export default ProductCard;
