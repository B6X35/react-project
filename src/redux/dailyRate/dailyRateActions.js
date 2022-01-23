import { createAsyncThunk } from '@reduxjs/toolkit';
import { postDayilyRate } from '../../services/serviceApi';

export const getDailyRate = createAsyncThunk(
  'getDailyRate',
  async (userCharacteristics, thunkApi) => {
    try {
      const dailyRate = await postDayilyRate(userCharacteristics);
      return dailyRate;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
