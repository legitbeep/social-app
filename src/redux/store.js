import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import {authApi} from './api/auth'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    
  },
});
