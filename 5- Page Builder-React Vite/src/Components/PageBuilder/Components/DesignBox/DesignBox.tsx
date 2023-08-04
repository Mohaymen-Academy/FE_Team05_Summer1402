import {SortableContext, useSortable, verticalListSortingStrategy} from '@dnd-kit/sortable';
import {DesignBoxSettings} from './DesignBoxSettings';
import {DragBox} from './DragBox';
import {ElementBox} from './ElementBox';
import {Droppable} from './Droppable';
import {useSelector} from 'react-redux';
import {storeStateTypes} from '../../../../util/types';
import {AiOutlinePlus} from 'react-icons/ai';
import {componentType} from '../../../../redux/slices';

const SortableComponent = ({element}: {element: componentType}) => {
  const {attributes, listeners, setNodeRef, transition, transform} = useSortable({id: element.id});
  return (
    <ElementBox
      dndListeners={listeners}
      dndAttr={attributes}
      dndRef={setNodeRef}
      id={element.id}
      type={element.type}
      key={element.id}
      dndTransform={transform}
      dndTransition={transition}
    />
  );
};

const DesignBox = () => {
  const elementComponents = useSelector((state: storeStateTypes) => state.builder.component);
  const settings = useSelector((state: storeStateTypes) => state.builder.pageSetting);
  const showDropZone = useSelector((state: storeStateTypes) => state.builder.showDropZone);

  ///sort elements by order
  const sortedElementComponent = [...elementComponents].sort((a, b) => a.order - b.order);
  return (
    <main className="lg:w-[calc(100vw-175px-345px)] w-full flex justify-center items-center ">
      <div className="w-[360px] flex flex-col h-[90%] max-h-[800px] relative">
        <div
          style={{gap: settings.gap, padding: settings.padding, overflowY: showDropZone ? 'hidden' : 'auto'}}
          className="bg-white w-full h-full flex flex-col overflow-hidden relative"
        >
          <SortableContext items={sortedElementComponent} strategy={verticalListSortingStrategy}>
            {sortedElementComponent.map((component) => (
              <SortableComponent element={component} key={component.id} />
            ))}
          </SortableContext>
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
        <div className="absolute bottom-14 w-full backdrop-blur-md ">
          <Droppable id="droppable">
            <DragBox />
          </Droppable>
        </div>
      </div>
    </main>
  );
};

export default DesignBox;
