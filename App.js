import 'react-native-gesture-handler';
import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { NavigationContainer } from '@react-navigation/native';
import {  createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
// import rootReducer from './redux/index-reducer';
import MyStack from './navigation/index';
import petsReducer from './Screens/Pets/reducer';

// const sagaMiddleware = createSagaMiddleware();
debugger;
const rootReducer = combineReducers({
  pets: petsReducer,
});

const store =createStore(rootReducer);

const App =() =>  (
  <NavigationContainer>
    <Provider store={store}>
      <MyStack />
    </Provider>
  </NavigationContainer>
);

export default App;
