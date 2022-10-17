import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Civilizations } from '../resources/types';
import { RootState } from './store';

const initialState: Civilizations[] = []

const storeSlice = createSlice({
  name: 'civilizations',
  initialState,
  reducers: {
    setStore(state, action: PayloadAction<Civilizations[]>) {
      return state = action.payload;
    },
  },
});
export const { setStore } = storeSlice.actions;
export default storeSlice.reducer;
export const getStore = (
  state: RootState
) => state;