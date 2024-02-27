import React from 'react';
import styles from './Header.module.css';
import Button from '../ui/Button/Button';
import logo from '../../images/logo.svg';
import adds from '../../images/Group 2.svg';
import whats from '../../images/whatsapp 1.svg';

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.header_white}>
                <img src={logo} alt='logo' className={styles.header_logo} />
                <img src={adds} alt='address' className={styles.header_adds}  />
                <img src={whats} alt='whats'  className={styles.header_whats}/>
                <div className={styles.phone}>+7(863) 000 00 00 <span>Ростов-на-Дону</span></div>
                <Button title="Записаться на прием" bg="#0DBC91" />
            </div>
            <div className={styles.header_green}>
                <div className={styles.green_items}>
                    <a href='#'>О клинике</a>
                    <a href='#'>Услуги</a>
                    <a href='#'>Специалисты</a>
                    <a href='#'>Цены</a>
                    <a href='#'>Контакты</a>
                </div>
            </div>
        </div>
    );
};

export default Header;