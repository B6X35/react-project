import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDayInfo, deletDay, postDay, getProductApi } from '../../services/serviceApi';

export const getDayInfoOperation = createAsyncThunk('getDayInfo', async (date, thunkApi) => {
  try {
    const dayInfo = await getDayInfo(date);
    return { dayInfo };
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const addProductOperation = createAsyncThunk(
  'addProduct',
  async ({ data, productId, weight }, thunkApi) => {
    try {
      const state = thunkApi.getState();
      console.log('addProdu >>', state.day)
      const products = await postDay(data, productId, weight);
      return products;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const deleteProductOperation = createAsyncThunk(
  'deleteProduct',
  async ({ dayId, eatenProductId }, thunkApi) => {
    try {
      console.log({ dayId, eatenProductId })
      const response = await deletDay(dayId, eatenProductId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
