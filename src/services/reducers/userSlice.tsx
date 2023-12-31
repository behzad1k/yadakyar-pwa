import restApi from '@/services/restApi';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface userState {
  profile: any;
  addresses: any[];
  favorites: any[];
}

const initialState: userState = {
  profile: {},
  addresses: [],
  favorites: [],
};

const profile = createAsyncThunk('profile/fetch', async () => {
  return await restApi(process.env.BASE_URL + '/v1/profile/', true).get();
});

const addresses = createAsyncThunk('addresses/fetch', async () => {
  return await restApi(process.env.BASE_URL + '/v1/profile/address/', true).get();
})

const favorites = createAsyncThunk('favorites/fetch', async () => {
  return await restApi(process.env.BASE_URL + '/v1/profile/favorite/', true).get();
})

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
    .addCase(profile.fulfilled, (state, action) => {
      if (action.payload.error){
        Cookies.remove('app-token');
        Cookies.remove('token');
      }
      state.profile = action.payload?.data
    })
    .addCase(addresses.fulfilled, (state, action) => {
      state.addresses = action.payload?.data
    })
    .addCase(favorites.fulfilled, (state, action) => {
      state.favorites = action.payload?.data
    })
  }
});

export {
  profile,
  addresses,
  favorites,
}

const userReducer = userSlice.reducer;

export default userReducer;
