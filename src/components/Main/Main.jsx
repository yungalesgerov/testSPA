import React, { useState,useEffect} from 'react';
import styles from './Main.module.css';
import heroImg from '../../images/hero_img.png';
import Slider from '../Slider/Slider.jsx';
import { useSwiper } from 'swiper/react';
import Questions from '../ui/Questions/Questions.jsx';

const Main = ({active,setActive}) => {
    const swiper = useSwiper();

    const [value,setValue] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=1')
            .then(res => res.json())
            .then(result => setValue(result))
    },[])
    

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
                        <p>{value[0].body}</p>    
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