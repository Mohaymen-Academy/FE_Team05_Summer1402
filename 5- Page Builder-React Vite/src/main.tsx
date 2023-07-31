import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {Provider} from 'react-redux';
import {ChakraProvider} from '@chakra-ui/react';
import store from './redux/store.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
