import { createSlice } from '@reduxjs/toolkit';
import { getDailyRate } from './dailyRateActions';

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
  },
});

export default dailyRateSlice.reducer;
