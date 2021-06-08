import axios from 'axios'
export const instance = axios.create({
  baseURL: 'https://api.thecoffeehouse.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});
export const getOrder = (params) => instance.get('/v2/menu', params)
export const getCate = (params) => instance.get('/v2/category/web', params)
export const getStore = (params) => instance.get('/get_all_store', params)

export const onLogin = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: { token: 'abcxyz' }
      });
    }, 300);
  });
};