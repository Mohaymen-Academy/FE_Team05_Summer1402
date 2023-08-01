import {Middleware} from '@reduxjs/toolkit';
import {storeStateTypes} from '../util/types';
import axios from 'axios';

const serverRequestMiddleware: Middleware<{}, storeStateTypes> = () => (next) => async (action) => {
  if (['builder/addComponent'].includes(action.type)) {
    // const {data} = await axios.get('http://localhost:3030/components');
  }

  const result = next(action);
  return result;
};

export default serverRequestMiddleware;
