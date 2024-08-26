import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Store } from './App/Store';
import MainRedux from './MainRedux'
import { Provider } from 'react-redux';
import TodoComponent from './Todocomponents';
import FinanceManager from './FinanceManager/FinanceManager';

export default function ReduxRouter() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={FinanceManager}></Route>

          <Route path="/" Component={TodoComponent}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
