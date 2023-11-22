import Cookies from 'js-cookie';

const isLoggedIn = () => {
  return Cookies.get('token') != undefined
}

export {
  isLoggedIn,
}