import React from 'react';

type CarouselProps = {
  imgArray: string[];
};

const Carousel: React.FC<CarouselProps> = ({imgArray}) => {
  return (
    <section className="max-w-6xl m-auto mb-12">
      <div className="w-[90%] m-auto overflow-hidden hidden">
        <div className="gallery-container flex items-center h-[330px] sm:h-[478px] mx-auto max-w-[1000px] relative">
          {imgArray.map((img) => (
            <a className="gallery-item" data-index="1" href="#">
              <img className="carousel-image" src={img} alt="carousel image" />
            </a>
          ))}
          <div className="flex flex-row-reverse gap-2 absolute z-50 bottom-2 md:bottom-0 left-1/2 -translate-x-1/2 bg-slate-500/30 p-2 rounded-xl opacity-70 hover:opacity-100 transition"></div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
