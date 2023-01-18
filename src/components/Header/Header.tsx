import React, {FC} from 'react';
import styles from './Header.module.css';

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => (
    <div className={styles.Header}>
        <button className={styles.Home}>Home</button>
        <button className={styles.Login}>Login</button>
    </div>
);

export default Header;
