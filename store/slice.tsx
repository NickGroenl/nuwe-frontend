import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Characters } from '../resources/types';
import { RootState } from './store';

const initialState: Characters[] = []

const storeSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setStore(state, action: PayloadAction<Characters[]>) {
      return state = action.payload;
    },
  },
});
export const { setStore } = storeSlice.actions;
export default storeSlice.reducer;
export const getStore = (
  state: RootState
) => state;