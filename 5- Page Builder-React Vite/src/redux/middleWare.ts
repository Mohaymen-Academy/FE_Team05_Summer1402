import {Middleware} from '@reduxjs/toolkit';
import axios from 'axios';
import {storeStateTypes} from '../util/types';

const serverRequestMiddleware: Middleware<{}, storeStateTypes> = (store) => (next) => async (action) => {
  ///add component to DB
  if (action.type === 'builder/addComponent') {
    axios.post(`http://localhost:3000/components/`, {...action.payload, active: false});
  }

  ///delete component from  DB
  if (action.type === 'builder/removeComponent') {
    axios.delete(`http://localhost:3000/components/${action.payload.id}`);
  }

  //modify component settings
  if (action.type === 'builder/setSettings') {
    const editingId = action.payload.id;
    const editingComponent = store.getState().builder.component.find((compo) => compo.id === editingId);

    axios.put(`http://localhost:3000/components/${editingId}`, {
      ...editingComponent,
      setting: {...editingComponent?.setting, ...action.payload.setting},
      active: false,
    });
  }

  //modify page settings
  if (action.type === 'builder/setPageSetting') {
    const pageSetting = store.getState().builder.pageSetting;

    axios.put(`http://localhost:3000/pageSetting`, {
      ...pageSetting,
      ...action.payload.setting,
    });
  }
  // page Header name
  if (action.type === 'builder/setPageHeader') {
    // const header = store.getState().builder.pageHeader;
    const {header} = action.payload;
    console.log(header);
    axios.post(`http://localhost:3000/pageHeader`, {pageHeader: header});
  }

  ///
  const result = next(action);
  return result;
};

export default serverRequestMiddleware;
