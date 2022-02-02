import { createAsyncThunk } from '@reduxjs/toolkit';
import { postDayilyRate, postDayilyRateUser } from '../../services/serviceApi';

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

export const getDailyRateUser = createAsyncThunk(
  'getDailyRateUser',
  async (userCharacteristics, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const userId = state.auth.user.id;
      console.log(userId)
      const dailyRate = await postDayilyRateUser(userCharacteristics, userId);
      return dailyRate;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);