import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {useRef, useState } from "react";


const Banner = () => {
    const swiperRef = useRef()
    const [currentSlide,setCurrentSlide] = useState(0)
    
    return (
        <div className="relative">
              <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={(swiper) => {swiperRef.current = swiper}}
      className='h-[600px]'
    >
      <SwiperSlide className="bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/banner/1.jpg')] bg-cover">
        
            <div className='flex justify-start ms-32 w-full h-full '>
            <div className='self-center'>
            <h1 className='text-white font-bold text-7xl w-11/12 max-w-[350px] leading-[80px]'>Affordable Price For Car Servicing</h1>
            <p className='w-11/12 max-w-[500px] text-white mt-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div className="flex gap-3 mt-5">
           <button className="bg-common-color text-white rounded-md p-3">Discover More</button>
            <button className="text-white border-2 border-white p-3 rounded-md">Latest Project</button>
           </div>
            </div>
            </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('/images/banner/2.jpg')] bg-cover ">
            <div className='flex justify-start items-center w-full h-full'>
            <div>
            <h1>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('/images/banner/3.jpg')] bg-cover ">
            <div className='flex justify-start items-center w-full h-full'>
            <div>
            <h1>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('/images/banner/4.jpg')] bg-cover ">
            <div className='flex justify-start items-center w-full h-full'>
            <div>
            <h1>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('/images/banner/5.jpg')] bg-cover ">
            <div className='flex justify-start items-center w-full h-full'>
            <div>
            <h1>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('/images/banner/6.jpg')] bg-cover ">
            <div className='flex justify-start items-center w-full h-full'>
            <div>
            <h1>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            </div>
      </SwiperSlide>


    </Swiper>
    <div className="absolute right-[70px] bottom-[70px] z-10 flex justify-between w-[120px] items-center gap-5 text-white">
      <button className={currentSlide > 0? "w-[50px] h-[50px] flex justify-center items-center  bg-common-color rounded-full hover:bg-cc-hover active:w-[45px] active:h-[45px]" : "w-[50px] h-[50px] flex justify-center items-center  bg-[#FFFFFF40] rounded-full"} onClick={()=>{swiperRef.current.slidePrev()
        if(currentSlide > 0){
            setCurrentSlide(currentSlide-1)
        }
      }}>
                <FaArrowLeftLong className=""/>
                </button>
                <button className={currentSlide < 5? "w-[50px] h-[50px] flex justify-center items-center  bg-common-color rounded-full hover:bg-cc-hover active:w-[45px] active:h-[45px]" : "w-[50px] h-[50px] flex justify-center items-center bg-[#FFFFFF40]  rounded-full"} onClick={()=>{swiperRef.current.slideNext()
                          if(currentSlide < 5){
                            setCurrentSlide(currentSlide+1)
                        }
                }}>
                <FaArrowRightLong className=""/>
                </button>
      </div>
        </div>
    );
};

export default Banner;