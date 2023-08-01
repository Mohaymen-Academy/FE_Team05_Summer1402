import {createSlice} from '@reduxjs/toolkit';

type componentType = {
  type: 'btn' | 'txt';
  id: string | number;
  setting: Record<string, any>;
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
      state.component.push(action.payload);
    },
  },
});

export default BuilderSlice;
