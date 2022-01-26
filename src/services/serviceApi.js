import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const path = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  USER: './user',
  DAILY_RATE: './daily-rate',
  PRODUCT: './product',
  DAY: './day',
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

export const getUserApi = async id => {
  try {
    const { data } = await axios.get(path.USER, id);
    console.log(data);
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

export const postDayilyRateUser = async (id, rate) => {
  try {
    const { data } = await axios.post(path.DAILY_RATE + '/' + id, rate);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const getProductApi = async product => {
  try {
    const { data } = await axios.get(path.PRODUCT, product);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const postDay = async day => {
  try {
    const { data } = await axios.post(path.DAY, day);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const deletDay = async dayId => {
  try {
    const { data } = await axios.delete(path.DAY, dayId);
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const postDayInfo = async date => {
  try {
    const { data } = await axios.post(path.DAY + '/info', date);
    return data;
  } catch (error) {
    throw error.message;
  }
};
