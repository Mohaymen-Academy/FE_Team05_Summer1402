import {Header} from './Components/Header';
import {FramesMenu} from './Components/FramesMenu';
import DesignBox from './Components/DesignBox/DesignBox';
import AsideMenu from './Components/AsideMenu/AsideMenu';
import {DndContext} from '@dnd-kit/core';
import {useState} from 'react';

const PageBuilder = () => {
  const [activeDrag, setActiveDrag] = useState();

  function handleDragStart(event) {
    // console.log(event.active.data);
    setActiveDrag(event.active.id);
  }

  function handleDragEnd() {
    setActiveDrag(undefined);
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
