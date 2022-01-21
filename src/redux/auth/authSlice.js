import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, currentUser } from './authOperation';

const initialState = {
  user: {
    username: null,
    email: null,
  },
  todaySummary: {
      userId: null,
  },
  currentUser: [],
  sid: null,
  token: null,
  isLoginUser: false,
  isFetchCurrentUser: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
          },
          [registerUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isLoginUser = true;
            state.user = {
              username: payload.user.username,
              email: payload.user.email,
            };
          },
          [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
          },
          [loginUser.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
          },
          [loginUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isLoginUser = true;
            state.token = payload.refreshToken;
            state.sid = payload.sid;
            state.user = {
              username: payload.user.username,
              email: payload.user.email,
            };
            state.todaySummary = {
                userId: payload.userId,
            }
          },
          [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
          },
          [currentUser.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
            state.isFetchCurrentUser = false
          },
          [currentUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isFetchCurrentUser = false
            state.isLoginUser = true;
            state.currentUser = payload;
          },
          [currentUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
            state.isFetchCurrentUser = false
          },
          [logoutUser.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
          },
          [logoutUser.fulfilled]: (state) => {
            state.isLoading = false;
            state.token = null;
            state.isLoginUser = false;
            state.user = {
              name: null,
              email: null,
            };
          },
          [logoutUser.rejected]: () => {
            return initialState;
          },
    }
})

export default authSlice.reducer