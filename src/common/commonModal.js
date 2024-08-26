import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const CommonModal = ({
  isOpen,
  closeModal,
  closeOnOverlayClick,
  showCloseIcon,
  children,
  classNames,
}) => {
  const [open, setOpen] = useState(isOpen);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    if (closeModal) {
      closeModal();
    }
  };
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        closeOnOverlayClick={closeOnOverlayClick}
        showCloseIcon={showCloseIcon}
        classNames={classNames}
      >
        {children}
      </Modal>
    </div>
  );
};

export default CommonModal;
