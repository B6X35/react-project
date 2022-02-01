import { createSlice } from '@reduxjs/toolkit';
import { getDailyRate, getDailyRateUser } from './dailyRateActions';

const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState: {
    dailyRate: null,
    summaries: [],
    notAllowedProducts: [],
    dayInfo: null,
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
      // auth.user.userData.dailyRate:payload.dailyRate,
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
  },
});

export default dailyRateSlice.reducer;
