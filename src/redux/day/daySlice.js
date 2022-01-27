import { createSlice } from '@reduxjs/toolkit';
import { getDayInfoOperation, addProductOperation, deleteProductOperation } from './dayOperations';

const daySlice = createSlice({
  name: 'day',
  initialState: {
    dayInfo: null,
    eatenProducts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getDayInfoOperation.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [getDayInfoOperation.pending]: state => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [getDayInfoOperation.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      dayInfo: payload.dayInfo,
    }),
    [addProductOperation.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [addProductOperation.pending]: state => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [addProductOperation.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.dayInfo.eatenProducts = payload.day.eatenProducts;
      // eatenProducts: payload.eatenProducts,
    },
    [deleteProductOperation.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [deleteProductOperation.pending]: state => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [deleteProductOperation.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.dayInfo.eatenProducts = null;
    },
  },
});

export default daySlice.reducer;
