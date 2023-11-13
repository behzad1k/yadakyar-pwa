import Header from "@/components/header/Header";
import productReq from "@/styles/productReq.module.scss";
import icon from "@/styles/icons.module.scss";

const ProductReq = () => {
  return (
    <main className={productReq.main}>
      <Header />
      <span className={productReq.newReq}>
        <i className={icon.plusOrange}></i>
        استعلام قیمت جدید
      </span>

      <div className={productReq.tabs}>
        <span className={productReq.active}>
          <small>۲</small>
          در انتظار قیمت
        </span>
        <span>
          <small>۱</small>
          اعلام شده
        </span>
      </div>
      <div className={productReq.inQueue}>
        <div className={productReq.inQueueItemDropdown}>
          <div className={productReq.inQueueItem}>
            <span className={productReq.inQueueItemTitle}>
              درخواست ۱۲۳
              <small>۱۲:۰۵ - ۳ اردیبهشت</small>
            </span>
            <span className={productReq.inQueueItemStatus}>در حال بررسی</span>
          </div>
          {/* ********************** THE ITEMS SHOWN IN DROPDOWN ********************** */}
          <span className={productReq.inQueueCar}>پراید ۱۳۱</span>
          <span className={productReq.inQueueProduct}>
            چراغ سقف اسپرت LED تیبا
          </span>
          <span className={productReq.inQueueProduct}>
            چراغ شاهین عقب راست روی گلگیر سایپا یدک
          </span>
          <span className={productReq.inQueueProduct}>
            راهنما روی گلگیر اسپرت طرح اسکلتی
          </span>
        </div>
      </div>

      {/* ********************** THE OTHER TAB ********************** */}

      <div className={productReq.finished}>
        <div className={productReq.finishedItemDropdown}>
          <div className={productReq.finishedItem}>
            <span className={productReq.finishedItemTitle}>
              درخواست ۱۲۳
              <small>۱۲:۰۵ - ۳ اردیبهشت</small>
            </span>
            <span className={productReq.finishedItemStatus}>اعلام قیمت</span>
          </div>

          {/* ********************** THE ITEMS SHOWN IN DROPDOWN ********************** */}

          <div className={productReq.finishedProduct}>
            <i className={icon.plusOrange} />
            <div className={productReq.finishedProductDetail}>
              <p>چراغ شاهین عقب راست روی گلگیر سایپا یدک</p>
              <span>۱۰۵,۰۰۰ تومان</span>
            </div>
          </div>
          <div className={productReq.finishedProduct}>
            <i className={icon.plusOrange} />
            <div className={productReq.finishedProductDetail}>
              <p>چراغ شاهین عقب راست روی گلگیر سایپا یدک</p>
              <span>۱۰۵,۰۰۰ تومان</span>
            </div>
          </div>
          <div className={productReq.finishedProduct}>
            <i className={icon.plusOrange} />
            <div className={productReq.finishedProductDetail}>
              <p>چراغ شاهین عقب راست</p>
              <span>۱۰۵,۰۰۰ تومان</span>
            </div>
          </div>
          <div className={productReq.finishedProduct}>
            <i className={icon.plusOrange} />
            <div className={productReq.finishedProductDetail}>
              <p>چراغ شاهین عقب راست روی گلگیر سایپا یدک</p>
              <span>۱۰۵,۰۰۰ تومان</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductReq;
