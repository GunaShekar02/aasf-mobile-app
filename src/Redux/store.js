import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistCombineReducers} from 'redux-persist';

import authReducer from './Reducers/auth';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

export const ConfigureStore = () => {
  const store = createStore(
    persistCombineReducers(config, {
      authReducer,
    }),
    applyMiddleware(thunk),
  );

  const persistor = persistStore(store);

  return {persistor, store};
};
