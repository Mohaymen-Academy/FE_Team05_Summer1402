import serverRequestMiddleware from './middleWare';
import {BuilderSlice} from './slices/';
import {configureStore} from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    builder: BuilderSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serverRequestMiddleware),
});
