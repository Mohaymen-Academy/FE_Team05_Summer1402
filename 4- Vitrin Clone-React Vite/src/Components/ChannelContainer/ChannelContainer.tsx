import React from 'react';
import {channelContainerInfo} from '../../util/Constants';
import {ChannelCard} from '../ChannelCard';

const ChannelContainer = () => {
  return (
    <section
      id="draggableSlideHaeder1"
      className="flex flex-col justify-center items-center w-[95%] xl:w-full max-w-6xl m-auto group"
    >
      <div className="flex items-center justify-start w-full text-xl mb-2">
        <div className="mr-2 pl-2 my-category">
          <p>مذهبی</p>
        </div>
        <div className="flex justify-start items-center opacity-0 px-5 show-more group-hover:opacity-100">
          <a href="#">نمایش همه</a>
          <img className="h-5 w-5 pt-1" src="public/assets/icons/caret-left-bold.svg" />
        </div>
      </div>
      <div className="w-full bg-ft-white py-3 px-5 overflow-hidden rounded-xl shadow-sm">
        <div
          id="draggableSlide"
          className="draggable-slide flex overflow-x-auto no-scrollbar transition-all duration-[0.2s] scale-100 active:scale-105 will-change-transform select-none w-full"
        >
          <div id="conatainer" className="flex gap-[1rem] py-2">
            {channelContainerInfo.map((card) => (
              <ChannelCard imgUrl={card.imgUrl} link={card.link} title={card.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelContainer;
