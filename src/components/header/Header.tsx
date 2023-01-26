import React from 'react';
import styles from './Header.module.css';



function Header() {
  return <div className={styles.Header}>
        <button type="button" className={styles.Home}>Home</button>
        <button type="button" className={styles.Login}>Login</button>
    </div>
}

export {Header};
