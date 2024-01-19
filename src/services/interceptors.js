import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {store} from '../redux/store';
import {logout} from '../redux/actions/userActions';
const interceptors = axios.create();

interceptors.interceptors.request.use(async config => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  } catch (err) {
    return Promise.reject(err);
  }
});

interceptors.interceptors.response.use(
  successRes => {
    console.log('successRes :>> ', successRes.data);
    if (successRes.data.message === 'success') {
      return {success: true, data: successRes.data.data, type: 'Success'};
    } else {
      return {
        success: false,
        message: successRes?.data?.message
          ? successRes?.data?.message
          : successRes?.message,
        messageType: 'Error',
      };
    }
  },
  error => {
    console.log('error ==>>', error.response);
    if (
      error?.response?.status === 401 ||
      error?.response?.status === 403 ||
      error?.response?.statusText === 'Unauthorized'
    ) {
      store.dispatch(logout());
      // store
      console.log(
        ' error?.response?.data?.error',
        error?.response?.data?.error,
      );
      return {
        success: false,
        message: error?.response?.data?.error
          ? error?.response?.data?.error
          : error?.response?.data?.error,
      };
    }
    if (error?.response?.status === 400 || error?.response?.status === 500) {
      console.log(
        'error?.response?.data?.error',
        error?.response?.data?.message,
      );
      return {
        success: false,
        message: error?.response?.data?.error
          ? error?.response?.data?.error
          : error?.response?.data?.message,
      };
    }
    return {
      success: false,
      message: 'Unable to connect API:',
      messageType: 'Error',
    };
  },
);

export default interceptors;
