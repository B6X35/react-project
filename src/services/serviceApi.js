import axios from 'axios';
import debounce from 'lodash';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const path = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  USER: './user',
  DAILY_RATE: './daily-rate',
  PRODUCT: '/product?search=',
  DAY: '/day',
  GET_INFO_DAY: './day/info',
};
const headers = {
  accept: 'application/json',
  'Content-Type': 'application/json',
};
const setToken = token => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
};

const unsetToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const newRefreshTokenApi = async (refreshToken, sid) => {
  setToken(refreshToken);
  try {
    const { data } = await axios.post(path.REFRESH, sid);
    const { newAccessToken, newRefreshToken } = data;
    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  } catch (error) {
    throw error.message;
  }
};

export const registerUserApi = async user => {
  try {
    const { data } = await axios.post(path.REGISTER, user);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const loginUserApi = async user => {
  try {
    const { data } = await axios.post(path.LOGIN, user);
    setToken(data.refreshToken);
    // setToken(data.accessToken);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const logoutUserApi = async user => {
  try {
    await axios.post(path.LOGOUT, user);
    unsetToken();
    return null;
  } catch (error) {
    throw error.message;
  }
};

export const getUserApi = async token => {
  try {
    setToken(token);
    const { data } = await axios.get(path.USER, token);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const postDayilyRate = async rate => {
  try {
    const { data } = await axios.post(path.DAILY_RATE, rate, { headers: headers });
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const postDayilyRateUser = async (rate, userId) => {
  try {
    console.log(userId);
    console.log(rate)
    const { data } = await axios.post(path.DAILY_RATE + '/' + userId, rate);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const getProductApi = async product => {
  try {
    const { data } = await axios.get(path.PRODUCT + product);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const postDay = async (date, productId, weight) => {
  try {
    const { data } = await axios.post(path.DAY, { date, productId, weight });
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const deletDay = async (dayId, eatenProductId) => {
  try {
    const { data } = await axios.delete(path.DAY, { dayId, eatenProductId });
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const getDayInfo = async date => {
  try {
    const { data } = await axios.post(path.DAY + '/info', { date });
    return data;
  } catch (error) {
    throw error.message;
  }
};
