import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import img1 from '../../images/secondary.png' 
import img2 from '../../images/someImg.jpg';

const Slider = () => {
    return (
        <Swiper 
            spaceBetween={50}
            slidesPerView={1}
        >
            <SwiperSlide><img src={img1} alt='pic' /></SwiperSlide>
            <SwiperSlide><img src={img2} alt='pic' /></SwiperSlide>
            <SwiperSlide><img src={img1} alt='pic' /></SwiperSlide>
            <SwiperSlide><img src={img2} alt='pic' /></SwiperSlide>
        </Swiper>
    );
};

export default Slider;