import {configureStore} from '@reduxjs/toolkit';
import {BuilderSlice} from './slices/';

export default configureStore({
  reducer: {
    user: BuilderSlice.reducer,
  },
});
