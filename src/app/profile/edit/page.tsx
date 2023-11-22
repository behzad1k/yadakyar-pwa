import TitleHeader from "@/components/header/TitleHeader";
import icon from "@/styles/icons.module.scss";
import profile from "@/styles/profile.module.scss";

const ProfileEdit = () => {
  return (
    <>
      <TitleHeader/>
      <main className={profile.body}>
        <div className={profile.editDataRow}>
          <div className={profile.editDataValue}>
            <span>نام و نام خانوادگی</span>
            <span>-</span>
          </div>
          <i className={icon.chevronLeftBlack}/>
        </div>
        <div className={profile.editDataRow}>
          <div className={profile.editDataValue}>
            <span>شماره موبایل</span>
            <span>-</span>
          </div>
          <i className={icon.plusBlack}/>
        </div>
        <div className={profile.editDataRow}>
          <div className={profile.editDataValue}>
            <span>ایمیل</span>
            <span>-</span>
          </div>
          <i className={icon.chevronLeftBlack}/>
        </div>
        <div className={profile.editDataRow}>
          <div className={profile.editDataValue}>
            <span>کد ملی</span>
            <span>-</span>
          </div>
          <i className={icon.chevronLeftBlack}/>
        </div>
        <div className={profile.editDataRow}>
          <div className={profile.editDataValue}>
            <span>تاریخ تولد</span>
            <span>-</span>
          </div>
          <i className={icon.chevronLeftBlack}/>
        </div>
      </main>
    </>
  )
}

export default ProfileEdit