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
export const getAllStore = (params) => instance.get('/get_all_store', params)

