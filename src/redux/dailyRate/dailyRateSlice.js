import { createSlice } from '@reduxjs/toolkit';
import { getDailyRate, getDailyRateUser } from './dailyRateActions';
import { logoutUser } from '../auth/authOperation';

const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState: {
    dailyRate: null,
    notAllowedProducts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getDailyRate.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [getDailyRate.pending]: state => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [getDailyRate.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      dailyRate: payload.dailyRate,
      notAllowedProducts: payload.notAllowedProducts,
    }),
    [getDailyRateUser.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [getDailyRateUser.pending]: state => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [getDailyRateUser.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      dailyRate: payload.dailyRate,
      notAllowedProducts: payload.notAllowedProducts,
    }),
    [logoutUser.fulfilled]: () => ({
      dailyRate: null,
      notAllowedProducts: [],
      isLoading: false,
      error: null,
    }),
  },
});

export default dailyRateSlice.reducer;
