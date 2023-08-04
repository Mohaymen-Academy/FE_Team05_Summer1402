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
  pageHeader: string;
};

export const BuilderSlice = createSlice({
  name: 'builder',
  initialState: {
    component: [],
    pageSetting: {gap: '0.75rem', padding: '16px'},
    pageHeader: 'نام صفحه',
  },
  reducers: {
    // set page header
    setPageHeader: (state: BuilderSliceTypes, action: {payload: {header: string}}) => {
      const {header} = action.payload;
      state.pageHeader = header;
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
    removeComponent: (
      state: BuilderSliceTypes,
      action: {
        payload: {id: string | number};
      }
    ) => {
      state.component = state.component.filter((compo) => compo.id !== action.payload.id);
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
