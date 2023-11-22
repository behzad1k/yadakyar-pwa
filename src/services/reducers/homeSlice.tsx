import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactElement } from 'react';

interface homeState {
  loading: boolean;
}

const initialState: homeState = {
  loading: false,
};


const homeSlice = createSlice({
  name: 'homeReducer',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const {
  setLoading
} = homeSlice.actions;

const homeReducer = homeSlice.reducer;

export default homeReducer;
