import { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ handleClose, children, checker }) => {
  useEffect(() => {
    document.addEventListener("keydown", close);

    return () => document.removeEventListener("keydown", close);
  }, []);

  const close = (e) => {
    if (e.code === "Escape") {
      return handleClose();
    }
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return createPortal(
    <div onClick={close} className={styles.overlay}>
      <div className={ (!checker) ? styles.content : styles.contentChange}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
