import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerUserApi,
  loginUserApi,
  logoutUserApi,
  getUserApi,
  newRefreshTokenApi,
} from '../../services/serviceApi';

export const registerUser = createAsyncThunk(
  'registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(userData);
      const newUserData = { email: data.email, password: userData.password };
      const login = await loginUserApi(newUserData);
      return login;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const loginUser = createAsyncThunk('loginUser', async (userData, { rejectWithValue }) => {
  try {
    const data = await loginUserApi(userData);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const logoutUser = createAsyncThunk('logoutUser', async (userData, { rejectWithValue }) => {
  try {
    const data = await logoutUserApi(userData);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const newRefreshToken = createAsyncThunk(
  'newRefreshToken',
  async (sid, { rejectWithValue }) => {
    try {
      const data = await newRefreshTokenApi(sid);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const currentUser = createAsyncThunk('currentUser', async (_, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const token = state.auth.user.tokens.refreshToken;
    if (token === null) {
      return thunkApi.rejectWithValue();
    }
    const data = await getUserApi(token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
