import icon from "@/styles/icons.module.scss";
import modal from "@/styles/modal.module.scss";

const Modal = ({ children }: any) => {
  return (
    <div className={modal.overlay}>
      <div className={modal.main}>
        <div className={modal.head}>
          <span>
            <i className={icon.close} />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
