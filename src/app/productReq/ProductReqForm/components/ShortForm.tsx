import productReqForm from "@/styles/productReqForm.module.scss";
import icon from "@/styles/icons.module.scss";

const ShortForm = () => {
  return (
    <main className={productReqForm.container}>
      <div className={productReqForm.shortFormHead}>
        <i className={icon.headphoneBlue} />
        <div className={productReqForm.title}>
          <i className={icon.sparePartBlue} />
          <span>سریع قیمت بگیر!</span>
          <p>اسم قطعه مورد نظرت رو بنویس تا کمتر از دو دقیقه قیمتشو بهت بگیم</p>
        </div>
        <i className={icon.chevronLeftBlue} />
      </div>

      <div className={productReqForm.shortFormBody}>
        <strong>استعلام قیمت</strong>
        <input type="text" placeholder="نام قطعه" />
        <input type="text" placeholder="نام قطعه" />
        <input type="text" placeholder="نام قطعه" />
        <input type="text" placeholder="نام قطعه" />
        <input type="text" placeholder="نام قطعه" />
        <span>
          <i className={icon.plus} />
        </span>
        <button>ثبت استعلام</button>
      </div>
    </main>
  );
};

export default ShortForm;
