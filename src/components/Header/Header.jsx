import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.header_white}></div>
            <div className={styles.header_green}></div>
        </div>
    );
};

export default Header;