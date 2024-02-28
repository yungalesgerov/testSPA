import React, { useState } from 'react';
import styles from './Main.module.css';
import heroImg from '../../images/hero_img.png';
import Slider from '../Slider/Slider.jsx';
import { useSwiper } from 'swiper/react';
import Questions from '../ui/Questions/Questions.jsx';

const Main = ({active,setActive}) => {
    const swiper = useSwiper();
    return (
        <div className={styles.Main}>
            <section className={styles.hero}>
                <div className={styles.hero_img}>
                    <img src={heroImg} alt="hero" />
                </div>
                <div className={styles.hero_desc}>
                    <div className={styles.desc_wrapper}>
                        <h1>Многопрофильная клиника для детей
                            <br /> и взрослых</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>    
                    </div> 
                </div>
            </section>
            <section className={styles.secondary}>
                <div className={styles.secondary_wrapper}>
                    <h1>Часто задаваемые вопросы</h1>
                    <Questions  />
                    <div className={styles.swapper}>
                        <Slider active={active} setActive={setActive} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;