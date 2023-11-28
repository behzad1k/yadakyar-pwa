import Cookies from 'js-cookie';

const apiRequest = async (url: string, useAccessToken = false, useOrderToken = false, method: string, body: any, headers: any) => {
  if (!headers['content-type']) {
    headers['content-type'] = 'application/json';
  }

  if (useOrderToken) {
    headers['order-token'] = Cookies.get('orderToken') || '';
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
      
      return {};
    });
};

const restApi = (url: string, useAccessToken = false, useOrderToken = false) => {
  const get = (query: any = {}, headers = {}) => {
    if (query !== '{}') {
      Object.entries(query).map(([key, value], index) => {
        url += (index == 0 ? '?' : '&') + key + '=' + value;
      });
    }
    return apiRequest(url, useAccessToken, useOrderToken, 'get', {}, headers);
  }

  const post = (body: any, headers = {}) => {
    return apiRequest(url, useAccessToken, useOrderToken, 'post', body, headers);
  }

  const put = (body: any, headers = {}) => {
    return apiRequest(url, useAccessToken, useOrderToken, 'put', body, headers);
  }

  const del = (body: any, headers = {}) => {
    return apiRequest(url, useAccessToken, useOrderToken, 'delete', body, headers);
  }

  const upload = async (body: {} = {}, headers = {}) => {
      // @ts-ignore
      headers['content-type'] = 'form-data';

    return apiRequest(url, useAccessToken, useOrderToken, 'post', body, headers);
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