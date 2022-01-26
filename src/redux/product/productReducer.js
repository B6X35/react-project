import { createSlice } from '@reduxjs/toolkit';
import { getProduct } from './productOperation';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getProduct.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [getProduct.pending]: state => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [getProduct.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      items: [...state.items, payload],
    }),
  },
});

export default productSlice.reducer;
