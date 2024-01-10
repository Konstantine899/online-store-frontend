import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localstorage';

export const $api = axios.create({
  baseURL: __API_URL__,
  headers: {
    Authorization: `Bearer ${JSON.parse(
      localStorage.getItem(ACCESS_TOKEN_KEY),
    )}`,
  },
});
