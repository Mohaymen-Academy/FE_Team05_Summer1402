import {useEffect, useState} from 'react';
import {DndContext, DragEndEvent} from '@dnd-kit/core';
import {useDispatch, useSelector} from 'react-redux';
import {v4} from 'uuid';
import {Header} from './Components/Header';
import {FramesMenu} from './Components/FramesMenu';
import DesignBox from './Components/DesignBox/DesignBox';
import AsideMenu from './Components/AsideMenu/AsideMenu';
import {BuilderSlice} from '../../redux/slices';
import axios from 'axios';
import {storeStateTypes} from '../../util/types';

const PageBuilder = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // handle for ending drag & drop frame buttons
  function handleDragEnd(event: DragEndEvent) {
    const type = event.active.id as 'btns' | 'txt';
    if (event.over) {
      dispatch(BuilderSlice.actions.addComponent({id: v4(), setting: {}, type, active: false}));
    }
  }
  // getting data from json server
  useEffect(() => {
    const setPrevData = async () => {
      const {data: components} = await axios.get('http://localhost:3000/components');
      const {data: pageSetting} = await axios.get('http://localhost:3000/pageSetting');
      const {
        data: {pageHeader},
      } = await axios.get('http://localhost:3000/pageHeader');

      dispatch(BuilderSlice.actions.setAppData({components, pageSetting, pageHeader}));
      setLoading(false);
    };
    setPrevData();
  }, []);
  const slider = useSelector((state: storeStateTypes) => state.builder.pageSetting.slider);
  const asideMenu = useSelector((state: storeStateTypes) => state.builder.pageSetting.asideMenu);
  // handler for hide and show aside menues
  const showAsides = (e: React.MouseEvent) => {
    // @ts-ignore
    const title = e.target.alt;
    if (title === 'slider') {
      if (slider) dispatch(BuilderSlice.actions.setPageSetting({setting: {slider: false}}));
      if (!slider) dispatch(BuilderSlice.actions.setPageSetting({setting: {slider: true}}));
    }
    if (title === 'asideMenu') {
      if (asideMenu) dispatch(BuilderSlice.actions.setPageSetting({setting: {asideMenu: false}}));
      if (!asideMenu) dispatch(BuilderSlice.actions.setPageSetting({setting: {asideMenu: true}}));
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="bg-neutral-light h-screen flex flex-col w-full">
        <Header onClick={showAsides} />
        <div className="flex w-screen h-[calc(100vh-56px)]">
          <FramesMenu />
          <DesignBox />
          <AsideMenu />
        </div>
      </div>
    </DndContext>
  );
};

export default PageBuilder;
