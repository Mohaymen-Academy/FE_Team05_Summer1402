import {createSlice} from '@reduxjs/toolkit';
import state from 'sweetalert/typings/modules/state';

type componentType = {
  type: 'btns' | 'txt';
  id: string | number;
  setting: Record<string, any>;
  active: boolean;
};

export type BuilderSliceTypes = {
  component: componentType[];
};

export const BuilderSlice = createSlice({
  name: 'builder',
  initialState: {
    component: [],
  },
  reducers: {
    setState: (state: BuilderSliceTypes, action: {payload: string}) => {
      console.log(action.payload);
    },
    addComponent: (
      state: BuilderSliceTypes,
      action: {
        payload: componentType;
      }
    ) => {
      if (['btns', 'txt'].includes(action.payload.type)) {
        state.component.push(action.payload);
      }
    },
    setActive: (state: BuilderSliceTypes, action: {payload: {id: string | number}}) => {
      const {id} = action.payload;
      state.component = state.component.map((compo) => ({
        ...compo,
        active: compo.id === id ? true : false,
      }));

    },
  },
});

export default BuilderSlice;
