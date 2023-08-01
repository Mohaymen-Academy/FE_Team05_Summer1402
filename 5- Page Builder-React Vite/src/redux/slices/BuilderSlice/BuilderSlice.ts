import {createSlice} from '@reduxjs/toolkit';
import {useNavigate} from 'react-router-dom';


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
      console.log(state.component);
      state.component = state.component.map((compo) => ({
        ...compo,
        active: compo.id === id ? true : false,
      }));
    },
    setSettings: (state: BuilderSliceTypes, action: {payload: {id: string | number; setting: Record<string, any>}}) => {
      const {id, setting} = action.payload;
      state.component = state.component.map((compo) => ({
        ...compo,
        setting: compo.id === id ? {...compo.setting, ...setting} : compo.setting,
      }));
    },
  },
});

export default BuilderSlice;
