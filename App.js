import React from 'react'
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducer from './reducer'
import thunk from "redux-thunk";
import Navi from './Navigation/Navi'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, allReducer)

let store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navi />
      </PersistGate>
    </Provider>
  )
}