import React, {useEffect, useState} from 'react';
import {InView} from 'react-intersection-observer';
import {AiOutlineLeft} from 'react-icons/ai';

type BannerProps = {
  color: string;
  dir: 'l' | 'r';
  buttonText: string;
  upperText: string;
  lowerText?: string;
  textColor: string;
  img: string;
  oneLine: boolean;
  id: string;
};
type bannerSubComponentProps = {
  gotInViewPort?: boolean;
  dir?: 'l' | 'r';
  upperText?: string;
  textColor?: string;
  lowerText?: string;
  buttonText?: string;
  img?: string;
  oneLine?: boolean;
};

//this sub component is the banner image
const ImgContainer: React.FC<bannerSubComponentProps> = ({gotInViewPort, dir, img}) => (
  <div
    style={{transform: gotInViewPort ? 'translate(0, 0) ' : `translate(${dir === 'l' ? '-' : ''}50vw, 0)`}}
    className="banner-img h-full sm:h-[90%] w-1/2 sm:w-auto transition duration-1000 ease-out"
  >
    <img className="h-full" src={img} />
  </div>
);

//this sub component is the banner text and button
const TextButtonContainer: React.FC<bannerSubComponentProps> = ({
  gotInViewPort,
  dir,
  upperText,
  textColor,
  lowerText,
  buttonText,
  oneLine,
}) => (
  <div
    style={{transform: gotInViewPort ? 'translate(0, 0) ' : `translate(${dir === 'r' ? '-' : ''}50vw, 0)`}}
    className="banner-text h-full w-1/2 sm:w-auto grid justify-center items-center text-center transition duration-1000 ease-out"
  >
    <div className="text-xl sm:text-3xl md:text-5xl lg:text-6xl flex flex-col gap-5 sm:gap-7">
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
        <div>
          <div className="flex flex-col gap-5">
            <div>
              {upperText} {oneLine && <span style={{color: textColor}}>{lowerText}</span>}
            </div>
            {!oneLine && (
              <div style={{color: textColor}} className="font-bold mr-16">
                {lowerText}
              </div>
            )}
          </div>
        </div>
      </div>
      <button className="btn-banner flex justify-center items-center gap-2">
        <div className="block">{buttonText}</div>
        <AiOutlineLeft />
      </button>
    </div>
  </div>
);

const Banner: React.FC<BannerProps> = ({color, dir, buttonText, textColor, img, upperText, lowerText, oneLine,id}) => {
  const [gotInViewPort, setGotInViewPort] = useState(false);

  return (
    <InView
      onChange={(_, entry) => {
        if (gotInViewPort) return;

        if (entry.isIntersecting) {
          setGotInViewPort(true);
        }
      }}
    >
      <div id={id}
        style={{
          background: `linear-gradient(to ${dir === 'l' ? 'left' : 'right'}, ${color}, #ffffff00)`,
          opacity: gotInViewPort ? 1 : 0,
          transform: gotInViewPort ? 'translate(0, 0)' : 'translate(0, 2rem)',
          flexDirection: dir === 'l' ? 'row-reverse' : 'row',
        }}
        className={`h-[30vh] min-h-[250px] flex justify-center items-center sm:gap-16 lg:gap-52 transition duration-1000`}
      >
        <ImgContainer gotInViewPort={gotInViewPort} img={img} dir={dir} />
        <TextButtonContainer
          buttonText={buttonText}
          lowerText={lowerText}
          upperText={upperText}
          textColor={textColor}
          gotInViewPort={gotInViewPort}
          dir={dir}
          oneLine={oneLine}
        />
      </div>
    </InView>
  );
};

export default Banner;
