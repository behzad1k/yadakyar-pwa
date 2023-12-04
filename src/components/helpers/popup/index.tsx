"use client"
import { useAppSelector } from '@/services/store';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import helper from "@/styles/helpers.module.scss";
import { popupSlice } from '@/services/reducers';

const Popup = () => {
  const popupReducer = useAppSelector(state => state.popupReducer);
  const dispatch: any = useDispatch();

  const list = () => {
    const rows: any[] = [];

    popupReducer.popups.forEach((item, index) => {
      rows.push(
        <>
          <div
            key={'popup' + index}
            className={helper.modalOverLay}
            style={{zIndex: index + 1, display: item.visible ? 'inline-block' : 'none'}}
            onClick={() => dispatch(popupSlice.hide())}
          />
          <div style={{ ...item.style, zIndex: index + 2, display: item.visible ? 'inline-block' : 'none'}}>
            {item.content}
          </div>
        </>
      )
    });

    return rows;
  }

  useEffect(() => {
    if (popupReducer.popups.length > 0 && popupReducer.popups[0].visible) {
      document.body.classList.add('onPopup');
    } else {
      document.body.classList.remove('onPopup');
    }
  }, [popupReducer.popups.length]);

  return (
    <>
      {list()}
    </>
  )
};

export default Popup;