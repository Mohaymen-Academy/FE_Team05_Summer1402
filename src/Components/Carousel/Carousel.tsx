import React, {LegacyRef, useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import {EffectCoverflow, Pagination, Autoplay} from 'swiper/modules';

import img1 from '../../assets/images/carousel/img1.jpg';
import img2 from '../../assets/images/carousel/img2.jpg';
import img3 from '../../assets/images/carousel/img3.jpg';
import img4 from '../../assets/images/carousel/img4.jpg';
import {Slide} from './Components';

function Carousel(): React.ReactNode {
  const urls = [img1, img2, img3, img4];

  const progressCircle = useRef<null | HTMLElement>(null);
  const progressContent = useRef<null | HTMLElement>(null);
  const onAutoplayTimeLeft = (_: any, time: number, progress: number) => {
    if (!progressCircle.current || !progressContent.current) return;
    progressCircle.current.style.setProperty('--progress', (1 - progress).toString());
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="w-full">
      <Swiper
        effect={'coverflow'}
        spaceBetween={30}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 300,
          depth: 1200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-auto overflow-visible"
      >
        {urls.map((url) => (
          <SwiperSlide className="w-[1200px] rounded-xl overflow-hidden">
            <Slide imgUrl={url} />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle as LegacyRef<SVGSVGElement> | undefined}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;
