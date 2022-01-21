import { createSlice } from "@reduxjs/toolkit";
import { addProduct } from "./productOperation";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [addProduct.rejected]: (state, { payload }) => ({
            ...state,
            error: payload,
            isLoading: false,
          }),
          [addProduct.pending]: (state) => ({
            ...state,
            error: null,
            isLoading: true,
          }),
          [addProduct.fulfilled]: (state, { payload }) => ({
            ...state,
            isLoading: false,
            items: [...state.items, payload],
          }),
    }
})

export default productSlice.reducer;