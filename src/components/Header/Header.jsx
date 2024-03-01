import React, { useState } from 'react';
import styles from './Header.module.css';
import Button from '../ui/Button/Button';
import logo from '../../images/logo.svg';
import adds from '../../images/Group 2.svg';
import whats from '../../images/whatsapp 1.svg';
import Popup from '../ui/Popup/Popup';

const Header = ({ setActive, active, isOpen, setOpen }) => {
    return (
        <div className={styles.Header}>
            <div className={styles.header_white}>
                <div className={styles.burger_icon} onClick={() => setOpen(!isOpen)}>
                    <span className={isOpen ? styles.burger_item_1 : styles.burger_item}></span>
                    <span className={isOpen ? styles.burger_item_2 : styles.burger_item}></span>
                    <span className={isOpen ? styles.burger_item_3 : styles.burger_item}></span>
                </div>

                <img src={logo} alt='logo' className={styles.header_logo} />
                <img src={adds} alt='address' className={styles.header_adds} />
                <div className={styles.contacts}>
                    <img src={whats} alt='whats' className={styles.header_whats} />
                    <div className={styles.phone}>+7(863) 000 00 00 <span>Ростов-на-Дону</span></div>
                </div>
                <Button title={"Записаться на прием"} bg={"#0DBC91"} value={active} callback={setActive} />
            </div>
            <div className={styles.header_green} >
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