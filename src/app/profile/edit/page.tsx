import TitleHeader from "@/components/header/TitleHeader";
import Logout from "@/components/layout/Logout";
import icon from "@/styles/icons.module.scss";
import profile from "@/styles/profile.module.scss";
import { popupSlice } from "@/services/reducers";
import NameEdit from "../components/NameEdit";
import { useDispatch } from "react-redux";
import PhoneEdit from "../components/PhoneEdit";
import EmailEdit from "../components/EmailEdit";
import IDEdit from "../components/IDEdit";

const ProfileEdit = () => {
  const dispatch = useDispatch();

  return (
    <>
      <TitleHeader title="ویرایش حساب کاربری" />
      <main className={profile.body}>
        <div
          className={profile.editDataRow}
          onClick={() => dispatch(popupSlice.bottom(<NameEdit />))}
        >
          <div className={profile.editDataValue}>
            <span>نام و نام خانوادگی</span>
            <span>-</span>
          </div>
          <i className={icon.chevronLeftBlack} />
        </div>
        <div
          className={profile.editDataRow}
          onClick={() => dispatch(popupSlice.bottom(<PhoneEdit />))}
        >
          <div className={profile.editDataValue}>
            <span>شماره موبایل</span>
            <span>-</span>
          </div>
          <i className={icon.plusBlack} />
        </div>
        <div
          className={profile.editDataRow}
          onClick={() => dispatch(popupSlice.bottom(<EmailEdit />))}
        >
          <div className={profile.editDataValue}>
            <span>ایمیل</span>
            <span>-</span>
          </div>
          <i className={icon.chevronLeftBlack} />
        </div>
        <div
          className={profile.editDataRow}
          onClick={() => dispatch(popupSlice.bottom(<IDEdit />))}
        >
          <div className={profile.editDataValue}>
            <span>کد ملی</span>
            <span>-</span>
          </div>
          <i className={icon.chevronLeftBlack} />
        </div>
        <div className={profile.editDataRow}>
          <div className={profile.editDataValue}>
            <span>تاریخ تولد</span>
            <span>-</span>
          </div>
          <i className={icon.chevronLeftBlack} />
        </div>
      </main>
    </>
  );
};

export default ProfileEdit;
