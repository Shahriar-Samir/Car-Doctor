import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Banner = () => {
    return (
        <div>
              <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className=''><img src='/images/banner/1.jpg' className='w-full h-[700px] object-cover'/></SwiperSlide>
      <SwiperSlide className=''><img src='/images/banner/2.jpg' className='w-full h-[700px] object-cover'/></SwiperSlide>
      <SwiperSlide className=''><img src='/images/banner/3.jpg' className='w-full h-[700px] object-cover'/></SwiperSlide>
      <SwiperSlide className=''><img src='/images/banner/4.jpg' className='w-full h-[700px] object-cover'/></SwiperSlide>
      <SwiperSlide className=''><img src='/images/banner/5.jpg' className='w-full h-[700px] object-cover'/></SwiperSlide>
      <SwiperSlide className=''><img src='/images/banner/6.jpg' className='w-full h-[700px] object-cover'/></SwiperSlide>
      ...
    </Swiper>
        </div>
    );
};

export default Banner;