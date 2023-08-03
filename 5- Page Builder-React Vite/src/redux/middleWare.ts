import {Middleware} from '@reduxjs/toolkit';
import {storeStateTypes} from '../util/types';
import axios from 'axios';

const serverRequestMiddleware: Middleware<{}, storeStateTypes> = (store) => (next) => async (action) => {
  if (action.type === 'builder/addComponent') {
    axios.post(`http://localhost:3000/components/`, {...action.payload, active: false});
  }

  if (action.type === 'builder/setSettings') {
    const editingId = action.payload.id;
    const editingComponent = store.getState().builder.component.find((compo) => compo.id === editingId);

    axios.put(`http://localhost:3000/components/${editingId}`, {
      ...editingComponent,
      setting: {...editingComponent?.setting, ...action.payload.setting},
    });
  }
  if (action.type === 'builder/setPageSetting') {
    const pageSetting = store.getState().builder.pageSetting;
    console.log(action.payload);

    axios.put(`http://localhost:3000/pageSetting`, {
      ...pageSetting,
      ...action.payload.setting,
    });
  }
  const result = next(action);
  return result;
};

export default serverRequestMiddleware;
