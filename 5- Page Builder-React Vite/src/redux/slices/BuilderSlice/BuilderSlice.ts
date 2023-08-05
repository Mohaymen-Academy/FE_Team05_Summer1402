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
    pageSetting: {gap: '0.75rem', paddingY: '25px'},
    pageHeader: 'نام صفحه',
  },
  reducers: {
    //set components and page setting on app start
    setAppData: (
      state: BuilderSliceTypes,
      action: {payload: {components: componentType[]; pageSetting: Record<string, any>; pageHeader: string}}
    ) => {
      const {components, pageSetting, pageHeader} = action.payload;
      state.component = components;
      state.pageSetting = pageSetting;
      state.pageHeader = pageHeader;
    },
    // set page header
    setPageHeader: (state: BuilderSliceTypes, action: {payload: {header: string}}) => {
      const {header} = action.payload;
      state.pageHeader = header;
    },

    // add component to design box
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

    // remove component from design box
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

    //set page setting
    setPageSetting: (state: BuilderSliceTypes, action: {payload: {setting: Record<string, any>}}) => {
      const {setting} = action.payload;

      state.pageSetting = {...state.pageSetting, ...setting};
    },
  },
});

export default BuilderSlice;
