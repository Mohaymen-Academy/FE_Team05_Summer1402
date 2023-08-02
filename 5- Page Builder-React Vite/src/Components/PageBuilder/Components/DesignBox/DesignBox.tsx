import {DesignBoxSettings} from './DesignBoxSettings';
import {DragBox} from './DragBox';
import {ElementBox} from './ElementBox';
import {Droppable} from './Droppable';
import {useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../util/types';
import {AiOutlinePlus} from 'react-icons/ai';

const DesignBox = () => {
  const elementComponents = useSelector((state: storeStateTypes) => state.builder.component);
  return (
    <main className="lg:w-[calc(100vw-175px-345px)] w-full flex justify-center items-center">
      <div className="w-[360px] flex flex-col h-[90%] max-h-[800px] relative">
        <div className="bg-white w-full h-full">
          {elementComponents.map((component) => (
            <ElementBox id={component.id} type={component.type} key={component.id} />
          ))}
          <Droppable id="droppable">
            <DragBox />
          </Droppable>
        </div>
        {/* confirm  */}
        <div className="w-full justify-center items-center pt-3 bg-slate-200">
          <button className="flex justify-center items-center border-2 border-white rounded-lg w-full h-12 bg-white/60">
            <AiOutlinePlus color="rgb(59 130 246)" size={24} />
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
