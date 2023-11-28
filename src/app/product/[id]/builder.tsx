import restApi from '@/services/restApi';
import product from '@/styles/product.module.scss';

export const fetchData = async (productId: number) =>
  await restApi(process.env.BASE_URL + `/v1/product/${productId}`).get()
