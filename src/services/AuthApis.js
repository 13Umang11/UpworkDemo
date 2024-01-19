import {appUrl} from '../assets/constant/actionTypes';
import interceptors from './interceptors';

export const loginApi = params => {
  return interceptors.post(`${appUrl}login`, params);
};

export const registerApi = params => {
  return interceptors.post(`${appUrl}registration`, params);
};
