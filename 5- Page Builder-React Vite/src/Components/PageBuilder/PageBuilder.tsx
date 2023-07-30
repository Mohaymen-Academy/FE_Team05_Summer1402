import {Header} from '../Header';
import {FramesMenu} from '../FramesMenu';
import DesignBox from '../DesignBox/DesignBox';
import {PageSettings} from '../PageSettings';

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
