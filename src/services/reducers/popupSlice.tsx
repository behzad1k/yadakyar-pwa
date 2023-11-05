import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactElement } from 'react';

type Popup = {
  content: ReactElement,
  style: any,
  visible: boolean
}

interface popupState {
  popups: Popup[];
}

const initialState: popupState = {
  popups: []
};

const popupSlice = createSlice({
  name: 'popupReducer',
  initialState,
  reducers: {
    full: (state, action: PayloadAction<ReactElement>) => {
      state.popups.push({
        content: action.payload,
        style: {
          top: 20,
          flex: 1,
          width: '100%',
        },
        visible: true,
      });
    },
    top: (state, action: PayloadAction<ReactElement>) => {
      state.popups.push({
        content: action.payload,
        style: { top: 0 },
        visible: true,
      });
    },
    left: (state, action: PayloadAction<ReactElement>) => {
      state.popups.push({
        content: action.payload,
        style: {
          right: 0,
          width: '70%',
          height: '100%',
        },
        visible: true
      });
    },
    bottom: (state, action: PayloadAction<ReactElement>) => {
      state.popups.push({
        content: action.payload,
        style: {
          bottom: 0,
          width: '100%',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
        visible: true,
      });
    },
    right: (state, action: PayloadAction<ReactElement>) => {
      state.popups.push({
        content: action.payload,
        style: { right: 0 },
        visible: true,
      });
    },
    hide: (state) => {
      if (state.popups.length) {
        state.popups[state.popups.length - 1].visible = false;
      }
    }
  },
});

export const {
  full,
  top,
  left,
  bottom,
  right,
  hide
} = popupSlice.actions;

const popupReducer = popupSlice.reducer;

export default popupReducer;
