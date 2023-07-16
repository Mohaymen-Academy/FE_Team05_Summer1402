import React from 'react';
import {SwiperSlide} from 'swiper/react';

type SlideProps = {
  imgUrl: string;
};

function Slide({imgUrl}: SlideProps): React.ReactNode {
  return (
    <SwiperSlide className="w-[100px]">
      <img src={imgUrl} />
    </SwiperSlide>
  );
}

export default Slide;
