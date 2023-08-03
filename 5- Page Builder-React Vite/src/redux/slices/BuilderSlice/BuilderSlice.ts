import {createSlice} from '@reduxjs/toolkit';

type componentType = {
  type: 'btns' | 'txt';
  id: string | number;
  setting: Record<string, any>;
  active: boolean;
};

export type BuilderSliceTypes = {
  component: componentType[];
  pageSetting: Record<string, any>;
};

export const BuilderSlice = createSlice({
  name: 'builder',
  initialState: {
    component: [],
    pageSetting: {gap: '0.75rem', padding: '16px'},
  },
  reducers: {
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

    //set active component
    setActive: (state: BuilderSliceTypes, action: {payload: {id: string | number}}) => {
      const {id} = action.payload;
      state.component = state.component.map((compo) => ({
        ...compo,
        active: compo.id === id ? true : false,
      }));
    },

    //set settings of the selected component
    setSettings: (state: BuilderSliceTypes, action: {payload: {id: string | number; setting: Record<string, any>}}) => {
      const {id, setting} = action.payload;

      state.component = state.component.map((compo) => ({
        ...compo,
        setting: compo.id === id ? {...compo.setting, ...setting} : compo.setting,
      }));
    },
    setPageSetting: (state: BuilderSliceTypes, action: {payload: {setting: Record<string, any>}}) => {
      const {setting} = action.payload;

      state.pageSetting = {...state.pageSetting, ...setting};
    },
  },
});

export default BuilderSlice;
