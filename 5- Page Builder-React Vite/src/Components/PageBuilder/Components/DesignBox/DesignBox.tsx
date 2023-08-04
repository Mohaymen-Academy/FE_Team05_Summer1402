import {DesignBoxSettings} from './DesignBoxSettings';
import {DragBox} from './DragBox';
import {ElementBox} from './ElementBox';
import {Droppable} from './Droppable';
import {useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../util/types';
import {AiOutlinePlus} from 'react-icons/ai';
import state from 'sweetalert/typings/modules/state';
import {useEffect} from 'react';
import {PageLayout} from '../AsideMenu';

const DesignBox = () => {
  const elementComponents = useSelector((state: storeStateTypes) => state.builder.component);
  const settings = useSelector((state: storeStateTypes) => state.builder.pageSetting);
  const showDesignBox = settings.spoiler;

  return (
    <main className="lg:w-[calc(100vw-175px-345px)] w-full flex justify-center items-center">
      <div className="w-[360px] flex flex-col h-[90%] max-h-[800px] relative">
        {/* element boxes */}
        <div
          style={{
            display: showDesignBox ? 'none' : 'flex',
            gap: settings.gap + 'px',
            paddingLeft: settings?.paddingX ? settings?.paddingX + 'px' : '15px',
            paddingRight: settings?.paddingX ? settings?.paddingX + 'px' : '15px',
            paddingBottom: settings?.paddingY + 'px',
            paddingTop: settings?.paddingY - settings.gap > 30 ? settings?.paddingY + 'px' : '30px',
          }}
          className="bg-white w-full h-full flex flex-col overflow-auto"
        >
          {elementComponents.map((component) => (
            <ElementBox id={component.id} type={component.type} key={component.id} />
          ))}
          <Droppable id="droppable">
            <DragBox />
          </Droppable>
        </div>

        {/* confirm  */}
        <div className="w-full justify-center items-center pt-3">
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
