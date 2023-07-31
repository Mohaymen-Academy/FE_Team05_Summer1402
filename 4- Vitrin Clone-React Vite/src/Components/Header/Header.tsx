import {useEffect, useRef} from 'react';
import {UpperHeader} from '../UpperHeader';
import {LowerHeader} from '../LowerHeader';

const Header = () => {
  ///////selectors
  const headerElement = useRef<HTMLHeadElement>(null);

  ////functions
  useEffect(() => {
    function sleep(time: number) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('Waited for ' + time);
        }, time);
      });
    }
    document.addEventListener('scroll', async () => {
      if (!headerElement.current) return;

      let scrollDirection;
      let previousScrollPosition = document.documentElement.scrollTop;
      await sleep(100);
      const currentScrollPosition = document.documentElement.scrollTop;

      if (currentScrollPosition > previousScrollPosition) {
        scrollDirection = 'down';
      } else if (currentScrollPosition < previousScrollPosition) {
        scrollDirection = 'up';
      }

      const scrolledHeight = document.documentElement.scrollTop;
      if (scrollDirection === 'down')
        if (scrolledHeight > 40) {
          headerElement.current.style.top = '-80px';
        }
      if (scrollDirection === 'up') {
        headerElement.current.style.top = '0px';
      }
    });
  }, []);
  return (
    <header
      ref={headerElement}
      className="bg-[#f2f1f6] fixed z-[999] top-0 flex-col w-screen h-[80px] md:h-[120px] justify-center drop-shadow-md transition-all flex"
    >
      <UpperHeader />
      <LowerHeader />
    </header>
  );
};

export default Header;
