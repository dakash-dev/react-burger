import type { ReactElement } from 'react';

import styles from './preloader.module.css';

const Preloader = (): ReactElement => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader_circle}></div>
    </div>
  );
};

export default Preloader;
