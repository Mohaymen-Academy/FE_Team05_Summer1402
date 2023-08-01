import {configureStore} from '@reduxjs/toolkit';
import {BuilderSlice} from './slices/';

export default configureStore({
  reducer: {
    builder: BuilderSlice.reducer,
  },
});
