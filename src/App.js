/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {ConfigureStore} from './Redux/store';

const {persistor, store} = ConfigureStore();

import RootContainer from './Containers/RootContainer';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootContainer />
      </PersistGate>
    </Provider>
  );
};
export default App;
