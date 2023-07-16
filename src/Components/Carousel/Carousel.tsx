import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import {EffectCoverflow, Pagination} from 'swiper/modules';

import img1 from '../../assets/images/carousel/img1.jpg';
import img2 from '../../assets/images/carousel/img2.jpg';
import img3 from '../../assets/images/carousel/img3.jpg';
import img4 from '../../assets/images/carousel/img4.jpg';
import {Slide} from './Components';

function Carousel(): React.ReactNode {
  const urls = [img1, img2, img3, img4];
  return (
    <div className="w-full">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper h-auto w-[600px] overflow-visible"
      >
        {urls.map((url) => (
          <SwiperSlide className="w-[1200px]">
            <Slide imgUrl={url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
