import Carousel3d from 'react-spring-3d-carousel';
import {useState, useEffect, useRef} from 'react';
import {config} from 'react-spring';
import {carouselImages} from '../../util/Constants';
import {v4 as uuidv4} from 'uuid';
import Card from './Card';
import useWindowDimensions from '../../hooks/useWindowDimention';

export default function Carousel() {
  // const [offsetRadius, setOffsetRadius] = useState(2);
  const [goToSlide, setGoToSlide] = useState<number>(2);

  const {width: windowWidth} = useWindowDimensions();

  const startOffset = useRef(0);
  const endOffset = useRef(0);
  const slide = useRef(goToSlide);

  let cards: {key: string; content: React.ReactNode}[] = carouselImages.map((img, i) => ({
    key: uuidv4(),
    content: <Card imageSrc={img} isFront={i === goToSlide} />,
  }));

  const slides = cards.map((element, index) => {
    return {...element, onClick: () => setGoToSlide(index)};
  });

  const determineDirection = (delta: number) => {
    if (delta === 0) return;

    if (Math.abs(delta) < 25) return;

    if (delta > 0) {
      if (goToSlide === slides.length) {
        setGoToSlide(0);
      } else {
        setGoToSlide(goToSlide + 1);
      }
    }
    if (delta < 0) {
      if (goToSlide === 0) {
        setGoToSlide(slides.length - 1);
      } else {
        setGoToSlide(goToSlide - 1);
      }
    }

    startOffset.current = 0;
    endOffset.current = 0;
  };

  useEffect(() => {
    const slideAutomate = setInterval(() => {
      const slideNum = slide.current;

      if (slideNum === slides.length - 1) {
        setGoToSlide(0);
        slide.current = 0;
      } else {
        setGoToSlide(slide.current + 1);
      }
      // setGoToSlide(slide.current - 1);
      slide.current++;
    }, 10000);

    // window.addEventListener('resize', () => {

    // });

    //cleanUp function
    return () => clearInterval(slideAutomate);
  }, []);

  const dragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    //@ts-ignore
    startOffset.current = e.nativeEvent.offsetX;
  };

  const dragEnd = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    //@ts-ignore
    endOffset.current = e.nativeEvent.offsetX;

    determineDirection(startOffset.current - endOffset.current);

    startOffset.current = 0;
    endOffset.current = 0;
  };

  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startOffset.current = e.touches[0].clientX;
  };

  const touchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    endOffset.current = e.changedTouches[0].clientX;
    determineDirection(startOffset.current - endOffset.current);
  };

  return (
    <div className="w-[40%] m-auto">
      <div
        onMouseDown={dragStart}
        onMouseUp={dragEnd}
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
        className="h-[420px] mt-0 xs:mt-[40px] sm:mt-[80px] md:mt-[100px] mb-[40px] w-full relative"
      >
        <Carousel3d
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={windowWidth < 650 ? 1 : 2}
          showNavigation={false}
          animationConfig={config.gentle}
        />
        <div className="flex flex-row-reverse gap-2 absolute z-50 bottom-16 left-1/2 -translate-x-1/2 bg-slate-500/70 p-2 rounded-xl opacity-70 hover:opacity-100 transition">
          {slides.map((sld, i) => (
            <div
              key={sld.key}
              className={`bullet ${goToSlide === i ? 'bullet-active' : ''}`}
              onClick={sld.onClick}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
