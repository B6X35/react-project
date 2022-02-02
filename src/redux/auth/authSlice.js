import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, currentUser } from './authOperation';

const initialState = {
  user: {
    email: null,
    username: null,
    userId: null,
    userData: {
      weight: null,
      height: null,
      age: null,
      bloodType: null,
      desiredWeight: null,
    },
    tokens: {
      accessToken: null,
      refreshToken: null,
      sid: null,
    },
  },
  isLoginUser: false,
  isFetchCurrentUser: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoginUser = true;
      state.user = {
        email: payload.user.email,
        username: payload.user.username,
        userId: payload.id,
      };
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => ({
      user: {
        username: payload.user.username,
        email: payload.user.email,
        userId: payload.user.id,
        userData: {
          weight: payload.user.userData.weight,
          height: payload.user.userData.height,
          age: payload.user.userData.age,
          bloodType: payload.user.userData.bloodType,
          desiredWeight: payload.user.userData.desiredWeight,
        },
        tokens: {
          ccessToken: payload.accessToken,
          refreshToken: payload.refreshToken,
          sid: payload.sid,
        },
      },
      isLoading: false,
      isLoginUser: true,
    }),
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [currentUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
      state.isFetchCurrentUser = false;
    },
    [currentUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isFetchCurrentUser = false;
      state.isLoginUser = true;
      state.user = payload;
    },
    [currentUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.isFetchCurrentUser = false;
    },
    [logoutUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logoutUser.fulfilled]: state => ({
      ...initialState,
      isLoading: false,
      isLoginUser: false,
      // state = null;
    }),
    [logoutUser.rejected]: state => state,
  },
});

export default authSlice.reducer;
