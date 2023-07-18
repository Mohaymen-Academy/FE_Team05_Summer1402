// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import {EffectCoverflow, Pagination, Autoplay} from 'swiper/modules';

import {Slide} from './Components';

import {slidesData} from '../../util/Constants';

function Carousel() {
  // const progressCircle = useRef<null | HTMLElement>(null);
  // const progressContent = useRef<null | HTMLElement>(null);
  // const onAutoplayTimeLeft = (_: any, time: number, progress: number) => {
  //   if (!progressCircle.current || !progressContent.current) return;
  //   progressCircle.current.style.setProperty('--progress', (1 - progress).toString());
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };

  return (
    <div className="w-full my-6">
      <Swiper
        effect={'coverflow'}
        spaceBetween={30}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 200,
          depth: 1000,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-auto overflow-visible"
      >
        {slidesData.map((tmp) => (
          <SwiperSlide className="w-[980px] rounded-xl overflow-hidden">
            <Slide heading={tmp.heading} description={tmp.description} imgUrl={tmp.imgUrl} />
          </SwiperSlide>
        ))}
        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle as LegacyRef<SVGSVGElement> | undefined}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
    </div>
  );
}

export default Carousel;
