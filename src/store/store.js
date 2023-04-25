// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/Loginslice";
import MemoryGameSlice from "./slices/MemoryGameSlice";

export const store = configureStore({
  reducer: {
    login: LoginSlice,
    memoryGame: MemoryGameSlice,
  },
});
