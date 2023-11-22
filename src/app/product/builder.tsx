import restApi from '@/services/restApi';

export const fetchData = async () =>
  await restApi(process.env.BASE_URL + '/v1/product/1415').get()