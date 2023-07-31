import {Header} from './Components/Header';
import {FramesMenu} from './Components/FramesMenu';
import DesignBox from './Components/DesignBox/DesignBox';
import AsideMenu from './Components/AsideMenu/AsideMenu';
import {Outlet} from 'react-router-dom';

const PageBuilder = () => {
  console.log(Outlet);
  return (
    <div className="bg-neutral-light h-screen flex flex-col w-full">
      <Header />
      <div className="flex w-screen h-[calc(100vh-56px)] reltive">
        <FramesMenu />
        <DesignBox />
        <AsideMenu />
      </div>
    </div>
  );
};

export default PageBuilder;
