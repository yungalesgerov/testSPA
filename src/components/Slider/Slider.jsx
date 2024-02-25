import {React,useRef,useState} from 'react';
import { Swiper, SwiperSlide,useSwiperSlide,useSwiper} from 'swiper/react'
import 'swiper/css';
import img1 from '../../images/secondary.png' 
import img2 from '../../images/someImg.jpg';
import arrow from '../../images/arrowL.svg';
import styles from './Slider.module.css';
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
                <SwiperSlide><img src={img1} alt='pic' /></SwiperSlide>
                <SwiperSlide><img src={img2} alt='pic' /></SwiperSlide>
                <SwiperSlide><img src={img1} alt='pic' /></SwiperSlide>
                <SwiperSlide><img src={img2} alt='pic' /></SwiperSlide>
                <div className={styles.arrow_block}>
                    <img
                     src={arrow} 
                     className={styles.arrow} 
                     alt="" 
                     onClick={()=>{swiperRef.current.slidePrev();decrement()}} 
                    />
                    <span>{count}/4</span>
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