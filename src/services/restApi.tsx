import Cookies from 'js-cookie';

const apiRequest = async (url: string, useAccessToken = false, method: string, body: any, headers: any) => {
  if (!headers['content-type']) {
    headers['content-type'] = 'application/json';
  }

  if (useAccessToken) {
    headers['app-token'] = Cookies.get('token') || '';
  }

  if (headers['content-type'] === 'application/json' && body) {
    body = JSON.stringify(body);
  }

  return await fetch(url, {
    method: method,
    headers: headers,
    body: (body !== '{}') ? body : undefined
  })
    .then(async (response: any) => {
      return await response.json();
    })
    .catch(error => {
      console.log('Fetch error', error);
      return {};
    });
};
// headers.refreshToken = await getToken(generalEnum.Tokens.refresh) || ''
const restApi = (url: string, useAccessToken = false) => {
  const get = (query: any = {}, headers = {}) => {
    if (query !== '{}') {
      Object.entries(query).map(([key, value], index) => {
        url += (index == 0 ? '?' : '&') + key + '=' + value;
      });
    }
    return apiRequest(url, useAccessToken, 'get', {}, headers);
  }

  const post = (body: any, headers = {}) => {
    return apiRequest(url, useAccessToken, 'post', body, headers);
  }

  const put = (body: any, headers = {}) => {
    return apiRequest(url, useAccessToken, 'put', body, headers);
  }

  const del = (body: any, headers = {}) => {
    return apiRequest(url, useAccessToken, 'delete', body, headers);
  }

  const upload = async (body: {} = {}, headers = {}) => {
      // @ts-ignore
      headers['content-type'] = 'form-data';

    return apiRequest(url, useAccessToken, 'post', body, headers);
  }

  return {
    upload,
    get,
    post,
    put,
    delete: del,
  }
}

export default restApi;