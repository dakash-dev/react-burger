import { CloseIcon } from '@krgaa/react-developer-burger-ui-components';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import ModalOverlay from '../modal-overlay/modal-overlay';

import type { FC, ReactNode, ReactPortal } from 'react';

import styles from './modal.module.css';

type TModalProps = {
  title?: string;
  children: ReactNode;
  onClose: () => void;
};

const modalRoot = document.getElementById('react-modals');

const Modal: FC<TModalProps> = ({ title, children, onClose }): ReactPortal => {
  useEffect(() => {
    // строгий тип KeyboardEvent для события нажатия клавиш&
    const handleEscClose = (esc: KeyboardEvent): void => {
      if (esc.key === 'Escape') {
        onClose();
      }
    };
    // Вкл слушать клавиатуру
    document.addEventListener('keydown', handleEscClose);
    // Выкл слушать клавиатуру.
    return (): void => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [onClose]);

  // Из просторов инета - Защитная проверка на существование ноды в DOM-дереве!
  if (!modalRoot) {
    throw new Error(
      'Не найден корневой элемент #react-modals для рендеринга модального окна'
    );
  }

  // ReactDOM.createPortal заменен на  метод createPortal.
  return createPortal(
    <>
      {/* Неизменяемый черный фон */}
      <ModalOverlay onClose={onClose} />
      {/* Белое окно */}
      <div className={styles.modal}>
        <div className={`${styles.header} mt-10 mr-10 ml-10`}>
          <h3 className="text text_type_main-large">{title}</h3>
          <button className={styles.closeButton} onClick={onClose}>
            <CloseIcon type="primary" {...({ width: 24, height: 24 } as any)} />
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
