import type { ReactElement } from 'react';

import styles from './modal_overlay.module.css';

type TModalOverlayProps = {
  onClose: () => void;
};

const ModalOverlay = ({ onClose }: TModalOverlayProps): ReactElement => {
  return <div className={styles.overlay} onClick={onClose} />;
};

export default ModalOverlay;
