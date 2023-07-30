import {Header} from './Components/Header';
import {FramesMenu} from './Components/FramesMenu';
import DesignBox from './Components/DesignBox/DesignBox';
import {PageSettings} from './Components/PageSettings';

const PageBuilder = () => {
  return (
    <div className="bg-neutral-light h-screen flex flex-col w-full">
      <Header />
      <div className="flex w-screen h-[calc(100vh-56px)] reltive">
        <FramesMenu />
        <DesignBox />
        <PageSettings />
      </div>
    </div>
  );
};

export default PageBuilder;
