import React from 'react';

const Header = () => {
  return (
    <header className="bg-white flex items-center justify-between w-full h-14">
      {/* <!--right icons--> */}
      <div className="flex justify-start items-center p-3 gap-4 w-full md:w-[170%] lg:w-full">
        <div className="h-[32px] w-[32px]">
          <img className="h-[32px] w-[32px]" src="../../public/assets/header/logo.png" alt="Logo" />
        </div>
        <div id="aside-frame-btn" className="lg:hidden">
          <img className="w-[24px] cursor-pointer" src="../../public/assets/asideMenu/frame.svg" />
        </div>
        <div>
          <img className="w-[24px]" src="../../public/assets/header/home.png" alt="Home" />
        </div>
        <div>
          <img className="w-[24px]" src="../../public/assets/header/eye.png" alt="eye" />
        </div>
        <div>
          <img className="w-[24px]" src="../../public/assets/header/upload.png" alt="upload" />
        </div>
      </div>
      {/* <!--page name--> */}
      <div className="w-full text-center p-2">
        <h4 className="text-blue-600">نام صفحه</h4>
      </div>
      {/* <!--left icons--> */}
      <div className="flex justify-end items-center w-full px-6 py-2 gap-5">
        <a className="w-[24px] h-[24px]" href="../page2/">
          <button className="w-[20px]">
            <img src="../../public/assets/header/forward.png" alt="undo right" />
          </button>
        </a>
        <a className="w-[24px] h-[24px]" href="">
          <button className="w-[20px]">
            <img src="../../public/assets/header/forward.png" className="scale-x-[-1]" alt="undo left" />
          </button>
        </a>

        <button id="aside-setting-btn" className="w-6 h-6 lg:hidden">
          <img src="../../public/assets/asideMenu/sliders.svg" alt="undo left" />
        </button>
      </div>
    </header>
  );
};

export default Header;
