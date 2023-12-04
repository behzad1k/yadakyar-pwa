import restApi from '@/services/restApi';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface cartState {
  cart: any;
}

const initialState: cartState = {
  cart: {},
};

const cart = createAsyncThunk('favorites/fetch', async () => {
  return await restApi(process.env.BASE_URL + '/v1/getLastOrder/', true, true).get();
})

const cartSlice = createSlice({
  name: 'cartReducer',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
    .addCase(cart.fulfilled, (state, action) => {
      state.cart = action.payload?.data
    })
  }
});

export {
  cart
}

const cartReducer = cartSlice.reducer;

export default cartReducer;
