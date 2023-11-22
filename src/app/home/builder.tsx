import restApi from '@/services/restApi';

export const fetchData = async () =>
  await restApi('https://yadakyar.com/api/v1/home').get()