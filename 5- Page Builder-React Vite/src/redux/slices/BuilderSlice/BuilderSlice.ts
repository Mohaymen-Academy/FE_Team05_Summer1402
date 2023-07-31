import {createSlice} from '@reduxjs/toolkit';

export type BuilderSliceTypes = {};

export const BuilderSlice = createSlice({
  name: 'board',
  initialState: {},
  reducers: {
    setState: (state: BuilderSliceTypes, action: {payload: string}) => {
      console.log(action.payload);
    },
  },
});

export default BuilderSlice;
