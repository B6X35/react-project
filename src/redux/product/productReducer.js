import { createSlice } from '@reduxjs/toolkit';
import { getProduct } from './productOperation';
import { logoutUser } from '../auth/authOperation';

const productSlice = createSlice({
  name: 'productSearch',
  initialState: {
    products: [],
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
      products: payload,
    }),
    [logoutUser.fulfilled]: () => ({
      products: [],
      isLoading: false,
      error: null,
    }),
  },
  // name: 'addProduct',
});

export default productSlice.reducer;
