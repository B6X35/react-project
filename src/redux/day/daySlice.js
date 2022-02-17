import { createSlice } from '@reduxjs/toolkit';
import { getDayInfoOperation, addProductOperation, deleteProductOperation } from './dayOperations';
import { logoutUser } from '../auth/authOperation';

const daySlice = createSlice({
  name: 'day',
  initialState: {
    daySummary: {
      date: null,
      kcalLeft: null,
      kcalConsumed: null,
      percentsOfDailyRate: null,
      dateId: null,
    },
    eatenProducts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getDayInfoOperation.pending]: state => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [getDayInfoOperation.fulfilled]: (state, { payload }) => ({
      ...state,
      daySummary: {
        ...state.daySummary,
        date: payload.daySummary?.date,
        kcalLeft: payload.daySummary?.kcalLeft,
        kcalConsumed: payload.daySummary?.kcalConsumed,
        percentsOfDailyRate: payload.daySummary?.percentsOfDailyRate,
        dateId: payload?.id,
      },
      eatenProducts: payload.eatenProducts ? [...payload.eatenProducts] : null,
      isLoading: false,
      error: null,
    }),
    [getDayInfoOperation.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [addProductOperation.pending]: state => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [addProductOperation.fulfilled]: (state, { payload }) => ({
      ...state,
      // eatenProducts: payload.eatenProducts ? [...payload.eatenProducts] : null,
      eatenProducts: [...payload.day.eatenProducts],
      daySummary: {
        ...state.daySummary,
        date: payload.daySummary.date,
        kcalLeft: payload.daySummary.kcalLeft,
        kcalConsumed: payload.daySummary.kcalConsumed,
        percentsOfDailyRate: payload.daySummary.percentsOfDailyRate,
        dateId: payload?.id, //?????????????????????
      },
      isLoading: false,
      error: null,
    }),
    [addProductOperation.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [deleteProductOperation.pending]: state => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [deleteProductOperation.fulfilled]: (state, { payload }) => ({
      ...state,
      // eatenProducts: state.eatenProducts.filter(product => product.id !== payload.eatenProducts.id),
      daySummary: {
        ...state.daySummary,
        date: payload.daySummary?.date,
        kcalLeft: payload.daySummary?.kcalLeft,
        kcalConsumed: payload.daySummary?.kcalConsumed,
        percentsOfDailyRate: payload.daySummary?.percentsOfDailyRate,
        dateId: payload?.id, //?????????????????????
      },
      isLoading: false,
      error: null,
    }),
    [deleteProductOperation.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [logoutUser.fulfilled]: () => ({
      daySummary: {
        date: null,
        kcalLeft: null,
        kcalConsumed: null,
        percentsOfDailyRate: null,
        dateId: null,
      },
      eatenProducts: [],
      isLoading: false,
      error: null,
    }),
  },
});

export default daySlice.reducer;
