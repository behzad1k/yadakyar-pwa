"use client"
import { useAppSelector } from '@/services/store';
import React from 'react';
import { useDispatch } from 'react-redux';

const Popup = () => {
  const popupReducer = useAppSelector(state => state.popupReducer);
  const list = () => {
    const rows: any[] = []
    popupReducer.popups.forEach((item, index) => {
      rows.push(
        <div style={{width: 1000, height: 1000, zIndex: 1000, }}>
          hiii
        </div>
      )
    });
    return rows;
  }

  return (
    <>
      {list()}
    </>
  )
};
export default Popup;