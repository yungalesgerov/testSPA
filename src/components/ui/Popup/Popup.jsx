import React from 'react';
import styles from './Popup.module.css';
import Button from '../Button/Button';
const Popup = ({active,setActive}) => {
    return (
        <div className={active? styles.popup:styles.hidden}>
            <div className={styles.popup_content}>
                <button onClick={()=>setActive(!active)}><span>&times;</span></button>
                <div className={styles.popup_form}>
                    <div className={styles.popup_title}>
                        <h1>Запишитесь <br /> на приём онлайн</h1>
                        <span>Администратор свяжется с вами через <br /> WhatsApp в течение дня и уточнит детали</span>
                    </div>
                    <div className={styles.popup_inputs}>
                        <input placeholder='ФИО' />
                        <input placeholder="Номер телефона" />
                        <input placeholder="Электронная почта" />
                        <Button title="Записаться" bg={'#0DBC91'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;