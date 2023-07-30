import React from 'react';
import {FrameButton} from './Components/FrameButton';

const FramesMenu = () => {
  return (
    <aside className="bg-white h-full w-[175px] px-[12px] absolute lg:static -right-[175px] transition-all z-50 shadow-lg">
      <div className="justify-center items-center w-full my-[8px]">
        <h1 className="py-[8px] px-2 font-bold">قالب‌ها</h1>
      </div>
      <div className="text-sm w-full flex flex-col gap-2 justify-start items-center">
        <FrameButton name="کارت" style="frame-btn" />
        <FrameButton name="دکمه ها" style="frame-btn" />
        <FrameButton name="متن" style="frame-btn" />
        <FrameButton name="عکس" style="frame-btn" />
        <FrameButton name="ویدئو" style="frame-btn" />
        <FrameButton name="اسلایدر" style="frame-btn" />
        <FrameButton name="آیکون" style="frame-btn" />
      </div>
    </aside>
  );
};

export default FramesMenu;
