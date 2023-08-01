import {createSlice} from '@reduxjs/toolkit';

export type AsideSliceType = {
  header: string;
  edittingComponentId: string | number;
  edittingComponentType: 'btns' | 'txt' | string;
};
export const AsideSlice = createSlice({
  name: 'aside',
  initialState: {
    edittingComponentId: '',
    edittingComponentType: '',
    header: '',
  },
  reducers: {
    setEdittingComponent: (state: AsideSliceType, action: {payload: {id: string | number; type: 'btns' | 'txt'}}) => {
      const {id, type} = action.payload;
      state.edittingComponentId = id;
      state.edittingComponentType = type;
    },
  },
});

export default AsideSlice;
