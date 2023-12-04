import popupReducer from '@/services/reducers/popupSlice';
import homeReducer from '@/services/reducers/homeSlice';
import userReducer from '@/services/reducers/userSlice';
import cartReducer from '@/services/reducers/cartSlice';
import { AnyAction, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

const rootReducer = combineReducers({
  popupReducer,
  homeReducer,
  userReducer,
  cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;

export const appDispatch = store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
