import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import store from './store';

import App from './App';

function Index() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <App />
    </Provider>
  );
}

export default Index;
