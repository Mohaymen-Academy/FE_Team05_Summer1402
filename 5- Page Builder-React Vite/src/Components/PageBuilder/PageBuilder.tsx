import {Header} from './Components/Header';
import {FramesMenu} from './Components/FramesMenu';
import DesignBox from './Components/DesignBox/DesignBox';
import AsideMenu from './Components/AsideMenu/AsideMenu';
import {DndContext, DragEndEvent, DragStartEvent} from '@dnd-kit/core';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {BuilderSlice} from '../../redux/slices';
import {v4} from 'uuid';

const PageBuilder = () => {
  const [activeDrag, setActiveDrag] = useState<string>();
  const dispatch = useDispatch();

  function handleDragStart(event: DragStartEvent) {
    setActiveDrag(event.active.id as string);
  }

  function handleDragEnd(event: DragEndEvent) {
    setActiveDrag(undefined);
    const type = event.active.id as 'btns' | 'txt';
    if (event.over) {
      dispatch(BuilderSlice.actions.addComponent({id: v4(), setting: {}, type, active: false}));
    }
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="bg-neutral-light h-screen flex flex-col w-full">
        <Header />
        <div className="flex w-screen h-[calc(100vh-56px)] reltive">
          <FramesMenu activeDragId={activeDrag} />
          <DesignBox />
          <AsideMenu />
        </div>
      </div>
    </DndContext>
  );
};

export default PageBuilder;
