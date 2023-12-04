"use client"
import Header from "@/components/header/Header";
import { popupSlice } from '@/services/reducers';
import profile from "@/styles/profile.module.scss";
import icon from "@/styles/icons.module.scss";
import { ReactElement } from 'react';
import { useAppSelector } from "@/services/store";
import { useDispatch } from 'react-redux';

const Favorites = () => {
  const userReducer = useAppSelector(state => state.userReducer);
  const dispatch: any = useDispatch();

  const list = () => {
    const rows: ReactElement[] = [];

    userReducer?.favorites?.map((favorite: any, index) =>
      rows.push(
        <div key={'fav' + index} className={profile.favoritesCard}>
          <div className={profile.favoritesCardDetail}>
            <span>{favorite.title}</span>
            <span className={profile.favoritesCardPrice}>
              {favorite.price}
            </span>
            <div className={profile.favoritesCardBtn}>
              <i className={icon.trashGray} />
              <span>افزودن به سبد</span>
            </div>
          </div>
          <div className={profile.favoritesCardImg}>
            <img src={favorite.gallery[0]?.original} alt="" />
          </div>
        </div>
      )
    )

    return rows;
  }
  
  return (
    <>
      <Header onBack={() => dispatch(popupSlice.hide())} />
      <main className={profile.noPaddingBody}>
        <div className={profile.favoritesTop}>
          <span>علاقه مندی ها</span>
          <span>
            <i className={icon.trash} />
            حذف همه
          </span>
        </div>
        <section className={profile.favoritesList}>
          {list()}
        </section>
      </main>
    </>
  );
};

export default Favorites;
