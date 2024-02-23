import React from 'react';
import styles from './Main.module.css';
import heroImg from '../../images/hero_img.png';
import Slider from '../Slider/Slider.jsx';


const Main = () => {
    return (
        <div className={styles.Main}>
            <section className={styles.hero}>
                <div className={styles.hero_img}>
                    <img src={heroImg} alt="hero" />
                </div>
                <div className={styles.hero_desc}>
                    <div className={styles.desc_wrapper}>
                        <h1>Многопрофильная клиника для детей
                            и взрослых</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>    
                    </div> 
                </div>
            </section>
            <section className={styles.secondary}>
                <div className={styles.secondary_wrapper}>
                    <h1>Часто задаваемые вопросы</h1>
                    <div className={styles.questions_list}>
                        <div className={styles.question}></div>
                        <div className={styles.question}></div>
                        <div className={styles.question}></div>
                        <div className={styles.question}></div>
                    </div>
                    <div className={styles.swapper}>
                        <Slider />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;