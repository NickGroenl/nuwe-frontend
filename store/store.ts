import { configureStore } from '@reduxjs/toolkit';
import characterSlice from './slice';

export const store = configureStore({
  reducer: {
    characters: characterSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
