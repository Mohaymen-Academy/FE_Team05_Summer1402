import {Middleware} from '@reduxjs/toolkit';
import {storeStateTypes} from '../util/types';
import axios from 'axios';

const serverRequestMiddleware: Middleware<{}, storeStateTypes> = () => (next) => async (action) => {
  if (action.type === 'builder/addComponent') {
    axios.post(`http://localhost:3000/components/`, action.payload);
  }
  const result = next(action);
  return result;
};

export default serverRequestMiddleware;
