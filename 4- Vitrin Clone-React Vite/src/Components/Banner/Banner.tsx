import React from 'react';
import {useInView} from 'react-intersection-observer';

type BannerProps = {
  color: string;
  dir: string;
  buttonText: string;
  upperText: string;
  lowerText: string;
  textColor: string;
  img: string;
};
const Banner: React.FC<BannerProps> = ({color, dir, buttonText, textColor, img, upperText, lowerText}) => {
  const {ref, inView,entry} = useInView({
    /* Optional options */
    threshold: 0,
  });
  const imgContainer = (
    <div className="banner-img h-full sm:h-[90%] w-1/2 sm:w-auto transition duration-1000 ease-out">
      <img className="h-full" src={img} />
    </div>
  );

  const textButtonContainer = (
    <div className="banner-text h-full w-1/2 sm:w-auto grid justify-center items-center text-center transition duration-1000 ease-out">
      <div className="text-xl sm:text-3xl md:text-5xl lg:text-6xl flex flex-col gap-5 sm:gap-7">
        <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
          <div>
            <div className="flex flex-col gap-5">
              <div>{upperText}</div>
              <div style={{color: textColor}} className="font-bold mr-16">
                {lowerText}
              </div>
            </div>
          </div>
        </div>
        <button className="btn-banner flex justify-center items-center">
          <div className="block">{buttonText}</div>
          <img className="h-full" src={''} />
        </button>
      </div>
    </div>
  );

  return (
    <div
      style={{background: `linear-gradient(to right, ${color}, #ffffff00)`, opacity: inView ? 1 : 0}}
      className={`h-[30vh] min-h-[250px] flex justify-center items-center sm:gap-16 lg:gap-52 transition duration-500 opacity-0 translate-y-12`}
      ref={ref}
    >
      {imgContainer}
      {textButtonContainer}
    </div>
  );
};

export default Banner;
