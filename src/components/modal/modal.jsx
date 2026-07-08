import { CloseIcon } from '@krgaa/react-developer-burger-ui-components';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import ModalOverlay from '../modal-overlay/modal-overlay';

import styles from './modal.module.css';

const modalRoot = document.getElementById('react-modals');

const Modal = ({ title, children, onClose }) => {
  useEffect(() => {
    const handleEscClose = (esc) => {
      if (esc.key === 'Escape') {
        onClose();
      }
    };
    // Вкл слушать клавиатуру
    document.addEventListener('keydown', handleEscClose);
    // Выкл слушать клавиатуру.
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      {/* Неизменяемый черный фон */}
      <ModalOverlay onClose={onClose} />
      {/* Белое окно */}
      <div className={styles.modal}>
        <div className={`${styles.header} mt-10 mr-10 ml-10`}>
          <h3 className="text text_type_main-large">{title}</h3>
          <button className={styles.closeButton} onClick={onClose}>
            <CloseIcon type="primary" width={24} height={24} />
          </button>
        </div>
        {/* Содержимое модального окна*/}
        <div className={styles.content}>{children}</div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
