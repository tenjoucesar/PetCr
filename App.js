import 'react-native-gesture-handler';
import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { NavigationContainer } from '@react-navigation/native';
import {  createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import MyStack from './navigation/index';
import IndexReducer from './redux/index-reducer';
import IndexSagas from './redux/index-sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  IndexReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(IndexSagas);

const App =() =>  (
  <NavigationContainer>
    <Provider store={store}>
      <MyStack />
    </Provider>
  </NavigationContainer>
);

export default App;
