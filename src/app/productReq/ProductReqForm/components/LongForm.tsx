import productReqForm from "@/styles/productReqForm.module.scss";
import icon from "@/styles/icons.module.scss";

const LongForm = () => {
  return (
    <main className={productReqForm.container}>
      <div className={productReqForm.longFormHead}>
        <i className={icon.headphoneBlue} />
        <div className={productReqForm.title}>
          <i className={icon.sparePartBlueSmall} />
          <span>سریع قیمت بگیر!</span>
        </div>
        <i className={icon.chevronLeftBlue} />
      </div>

      <div className={productReqForm.longFormBody}>
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

export default LongForm;
