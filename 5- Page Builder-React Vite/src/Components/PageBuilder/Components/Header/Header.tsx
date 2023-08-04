import logo from '../../../../assets/logo.png';
import asideMenu from '../../../../assets/asideMenu/frame.svg';
import home from '../../../../assets/header/home.svg';
import eye from '../../../../assets/header/eye.svg';
import upload from '../../../../assets/header/directbox-send.svg';
import forward from '../../../../assets/header/undo.svg';
import slider from '../../../../assets/asideMenu/sliders.svg';
import {IconAnchor} from './IconAnchor';
import {useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../util/types';

const Header = () => {
  const pageName = useSelector((state: storeStateTypes) => {
    return state.builder.pageHeader;
  });
  return (
    <header className="bg-white flex items-center justify-between w-full h-14">
      {/* right icons */}
      <div className="flex justify-start items-center p-3 gap-4 w-full md:w-[170%] lg:w-full">
        {/* logo */}
        <div className="h-[32px] w-[32px]">
          <img className="h-[32px] w-[32px]" src={logo} alt="Logo" />
        </div>
        {/* right icons */}
        <IconAnchor anchorStyle="lg:hidden" imgStyle="w-[24px] cursor-pointer" src={asideMenu} alt="asideMenu" />

        <IconAnchor anchorStyle="" imgStyle="w-[24px]" src={home} alt="Home" />

        <IconAnchor anchorStyle="" imgStyle="w-[24px]" src={eye} alt="eye" />

        <IconAnchor anchorStyle="" imgStyle="w-[24px]" src={upload} alt="upload" />
      </div>
      {/* <!--page name--> */}
      <div className="w-full text-center p-2">
        <h4 className="text-blue-600">{pageName}</h4>
      </div>
      {/* <!--left icons--> */}
      <div className="flex justify-end items-center w-full px-6 py-2 gap-5">
        <IconAnchor anchorStyle="w-[24px] h-[24px]" imgStyle="w-[24px] scale-x-[-1]" src={forward} alt="undo left" />
        <IconAnchor anchorStyle="w-[24px] h-[24px]" imgStyle="w-[24px]" src={forward} alt="undo right" />
        <IconAnchor anchorStyle="w-6 h-6 lg:hidden" imgStyle="" src={slider} alt="slider" />
      </div>
    </header>
  );
};

export default Header;
