import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import dailyRateReducers from './dailyRate/dailyRateSlice';
import dayReducer from './day/daySlice';
import productReducer from './product/productReducer';

const authConfigPersist = {
  key: 'token',
  version: 1,
  storage,
  whitelist: ['token'],
};

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const rootReducer = combineReducers({
  auth: persistReducer(authConfigPersist, authReducer),
  dailyRateReducers,
  day: dayReducer,
  productSearch: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export default store;
