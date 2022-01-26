import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductApi, postDay } from '../../services/serviceApi';

export const getProduct = createAsyncThunk('getProduct', async (product, thunkApi) => {
  try {
    console.log(product);
    const products = await getProductApi(product);
    return products;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const addProduct = createAsyncThunk('addProduct', async (product, thunkApi) => {
  try {
    const products = await postDay(product);
    return products;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
