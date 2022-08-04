import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay, } from './Overlay';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children, closeModal }) => {
  const closeModalOnEsc = e => {
    if (e.code === 'Escape') closeModal();
  };

  const closeOnBackdrop = e => {
    if (e.currentTarget === e.target) closeModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalOnEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', closeModalOnEsc);
      document.body.style.overflow = 'unset';
    };
  });

  return createPortal(
    <Overlay onClick={closeOnBackdrop}>
      <ModalWindow >{children}</ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
