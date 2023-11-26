import icon from "@/styles/icons.module.scss";
import modal from "@/styles/modal.module.scss";
import category from "@/styles/category.module.scss";
import helper from "@/styles/helpers.module.scss";
import { popupSlice } from "@/services/reducers";
import { useDispatch } from "react-redux";

const Modal = ({ children, title }: any) => {
  // const dispatch: any = useDispatch();

  return (
    <>
      <div
        className={helper.modalOverLay}
        // onClick={dispatch(popupSlice.hide())}
      />
      <div className={helper.modal}>
        <i className={icon.close} />
        <span className={helper.modalTitle}></span>
      </div>
    </>
  );
};

export default Modal;
