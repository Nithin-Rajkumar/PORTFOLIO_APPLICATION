import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Redux/userslics';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;