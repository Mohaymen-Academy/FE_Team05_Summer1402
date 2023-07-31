import {useRef, useEffect} from 'react';
import {channelContainerInfo} from '../../../../util/Constants';
import {ChannelCard} from './Components/ChannelCard';
import img from '../../../../assets/icons/caret-left-bold.svg';

const ChannelContainer = () => {
  const slider = useRef<HTMLDivElement>(null);
  let isDown = useRef(false);
  let startX = useRef(0);
  let scrollLeft = useRef(0);
  useEffect(() => {
    if (slider.current != null) {
      const mouseDownHandler: EventListenerOrEventListenerObject = (e: any) => {
        isDown.current = true;
        if (slider.current != null) {
          slider.current.classList.add('active');
          startX.current = e.pageX - slider.current.offsetLeft;
          scrollLeft.current = slider.current.scrollLeft;
        }
        const anchors = document.querySelectorAll('a');
        anchors.forEach((a) => {
          a.classList.remove('pointer-events-none');
        });
      };

      const mouseLeaveHandler: EventListenerOrEventListenerObject = () => {
        isDown.current = false;
        if (slider.current != null) {
          slider.current.classList.remove('active');
        }
        const anchors = document.querySelectorAll('a');
        anchors.forEach((a) => {
          a.classList.remove('pointer-events-none');
        });
      };

      const mouseUpHandler: EventListenerOrEventListenerObject = () => {
        isDown.current = false;
        if (slider.current != null) {
          slider.current.classList.remove('active');
        }
        const anchors = document.querySelectorAll('a');
        anchors.forEach((a) => {
          a.classList.remove('pointer-events-none');
        });
      };

      const mouseMoveHandler: EventListenerOrEventListenerObject = (e: any) => {
        // console.log(isDown.current);
        if (!isDown.current) return;
        e.preventDefault();
        const anchors = document.querySelectorAll('a');
        anchors.forEach((a) => {
          a.classList.add('pointer-events-none');
        });
        if (slider.current != null) {
          const x = e.pageX - slider.current.offsetLeft;
          const walk = x - startX.current;
          slider.current.scrollLeft = scrollLeft.current - walk;
        }
      };

      slider.current.addEventListener('mousedown', mouseDownHandler);
      slider.current.addEventListener('mouseleave', mouseLeaveHandler);
      slider.current.addEventListener('mouseup', mouseUpHandler);
      slider.current.addEventListener('mousemove', mouseMoveHandler);
    }
  }, []);

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
          <img className="h-5 w-5 pt-1" src={img} />
        </div>
      </div>
      <div className="w-full bg-ft-white py-3 px-5 overflow-hidden rounded-xl shadow-sm">
        <div
          ref={slider}
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
