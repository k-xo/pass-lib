import React, { ReactElement } from 'react';
import { useModalContext } from '../Contexts/ModelContext';
import './Modal.css';

export interface ModalTriggerProps {
  triggerText: string;
  modal: ReactElement;
}

const ModalTrigger = ({
  triggerText,
  modal,
}: ModalTriggerProps): JSX.Element => {
  const { isModalOpen, openModal, closeModal } = useModalContext();

  return (
    <>
      <button className="modal-trigger" onClick={openModal}>
        {triggerText}
      </button>
      {React.cloneElement(modal, { isOpen: isModalOpen, closeModal })}
    </>
  );
};

export default ModalTrigger;
