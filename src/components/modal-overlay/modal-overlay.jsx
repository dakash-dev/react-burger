import styles from './modal_overlay.module.css';

const ModalOverlay = ({ onClose }) => {
  return <div className={styles.overlay} onClick={onClose} />;
};

export default ModalOverlay;
