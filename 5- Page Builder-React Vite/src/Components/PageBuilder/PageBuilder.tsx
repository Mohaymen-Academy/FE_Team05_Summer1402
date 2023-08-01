import {Header} from './Components/Header';
import {FramesMenu} from './Components/FramesMenu';
import DesignBox from './Components/DesignBox/DesignBox';
import AsideMenu from './Components/AsideMenu/AsideMenu';
import {DndContext} from '@dnd-kit/core';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {BuilderSlice} from '../../redux/slices';
import {v4} from 'uuid';

const PageBuilder = () => {
  const [activeDrag, setActiveDrag] = useState();
  const dispatch = useDispatch();

  function handleDragStart(event) {
    // console.log(event.active.data);
    setActiveDrag(event.active.id);
  }

  function handleDragEnd(e) {
    setActiveDrag(undefined);
    console.log(e.active.id);
    const type = e.active.id;
    dispatch(BuilderSlice.actions.addComponent({id: v4(), setting: {}, type}));
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
