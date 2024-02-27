import {React,useRef,useState} from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import img1 from '../../images/slide.svg'; 
import img2 from '../../images/someImg.jpg';
import arrow from '../../images/arrowL.svg';
import styles from './Slider.module.css';
import Button from '../ui/Button/Button';
const Slider = () => {
    const [count,setCount] = useState(1);
    const swiperRef = useRef();
    const increment = () => {
        if(count >= 4) {
            return false;
        }
        setCount(count+1)
    }
    const decrement = () => {
        if(count === 1) {
           return false;
        }
        setCount(count-1)
    }

    return (
        <>
            <Swiper 
                onSwiper={(swiper)=>swiperRef.current = swiper}
                spaceBetween={50}
                slidesPerView={1}
            >
                <SwiperSlide><div className={styles.img_wrapper}>
                    <div className={styles.img_content}>
                        <h1>CHECK UP</h1>
                        <h2>для мучжин</h2>
                        <ul>
                            <li>Гормональный скрининг</li>
                            <li>Тестостерон</li>
                            <li>Свободный тестостерон</li>
                            <li>Глобулин, связывающий половые гормоны</li>
                        </ul>
                        <span>Всего 2800₽ <tt>3500₽</tt> </span>
                    </div>
                    <div className={styles.buttons}><Button title='Записаться' bg={'#0DBC91'} /><Button title='Подробнее' color={'#0DBC91'} /></div>
                    </div>
                    <img src={img1} alt='pic' />
                </SwiperSlide>
                <SwiperSlide><div className={styles.img_wrapper}></div><img src={img1} alt='pic' /></SwiperSlide>
                <SwiperSlide><div className={styles.img_wrapper}></div><img src={img1} alt='pic' /></SwiperSlide>
                <SwiperSlide><div className={styles.img_wrapper}></div><img src={img1} alt='pic' /></SwiperSlide>
                <div className={styles.arrow_block}>
                    <img
                     src={arrow} 
                     className={styles.arrow} 
                     alt="" 
                     onClick={()=>{swiperRef.current.slidePrev();decrement()}} 
                    />
                    <span><tt>{count}</tt>/4</span>
                    <img
                     src={arrow} 
                     className={styles.arrow}  
                     style={{rotate: "180deg"}} 
                     alt="" 
                     onClick={()=>{swiperRef.current.slideNext();increment()}}
                    />
                </div>
            </Swiper>
        </>
    );
};

export default Slider;