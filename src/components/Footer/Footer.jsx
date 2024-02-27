import React from 'react';
import styles from './Footer.module.css';
import logo from '../../images/logo.svg';
import whats from '../../images/whatsapp 1 1.svg';
import inst from '../../images/instagram 4 1.svg';
import tlg from '../../images/telegram 1.svg';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <img src={logo} className={styles.logo} />
                <div className={styles.footer_links}>
                    <a href='#'>О клинике</a>
                    <a href='#'>Услуги</a>
                    <a href='#'>Специалисты</a>
                    <a href='#'>Цены</a>
                    <a href='#'>Контакты</a>
                </div>
            </div>
            <img src={inst} className={styles.icon} alt="icon" />
            <img src={whats} className={styles.icon} alt="icon" />
            <img src={tlg} className={styles.icon} alt="icon" />
        </div>
    );
};

export default Footer;