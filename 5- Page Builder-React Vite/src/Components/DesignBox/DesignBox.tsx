import plus from '../../assets/body/plus.png';
import {DesignBoxSettings} from '../DesignBoxSettings';
import {DragBox} from '../DragBox';
import {ElementBox} from '../ElementBox';

const DesignBox = () => {
  return (
    <main className="lg:w-[calc(100vw-175px-345px)] w-full flex justify-center items-center">
      <div className="w-[360px] flex flex-col h-[90%] max-h-[800px] relative">
        <div className="bg-white w-full h-full">
          <ElementBox />
          <DragBox />
        </div>
        {/* confirm  */}
        <div className="w-full justify-center items-center pt-3 bg-slate-200">
          <button className="flex justify-center items-center border-2 border-white rounded-lg w-full h-12 bg-white/60">
            <img className="w-5 h-5 ml-2 mt-1" src={plus} alt="افزودن صفحه" />
            <p className="text-blue-500 text-lg font-bold">افزودن صفحه</p>
          </button>
        </div>
        {/* <!--icons column--> */}
        <DesignBoxSettings />
      </div>
    </main>
  );
};

export default DesignBox;
