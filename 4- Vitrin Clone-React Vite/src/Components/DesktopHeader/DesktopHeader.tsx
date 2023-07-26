import React from 'react';
import {UpperHeader} from '../UpperHeader';
import {LowerHeader} from '../LowerHeader';

const DesktopHeader = () => {
  return (
    <div
      id="header"
      className="bg-[#f2f1f6] fixed z-[999] top-0 flex-col w-screen h-[120px] justify-center drop-shadow-md transition-all hidden md:flex"
    >
      <UpperHeader />
      <LowerHeader />
    </div>
  );
};

export default DesktopHeader;
