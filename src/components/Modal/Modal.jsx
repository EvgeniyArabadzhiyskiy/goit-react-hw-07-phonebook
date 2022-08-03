import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './Overlay';

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

    return () => {
      window.removeEventListener('keydown', closeModalOnEsc);
    };
  });

  return createPortal(
    <Overlay onClick={closeOnBackdrop}>
      <div className="Modal">{children}</div>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
