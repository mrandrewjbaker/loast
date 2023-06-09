import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import './index.scss';

import { GridFrame } from './GridFrame/GridFrame';
import DevSliceReducer from './DevTools/Dev.slice';
import GameSliceReducer from './Game/Game.slice';
import { DevTools } from './DevTools/DevTools';

const _AppStore = configureStore({
  reducer: {
    Dev: DevSliceReducer,
    Game: GameSliceReducer,
  }
});

export type tAppStore = ReturnType<typeof _AppStore.getState>;

const useAppStoreDispatch = () => useDispatch();
const useAppStoreSelector = useSelector;

const App: React.FC = () => {

  return (
    <div id="app">
      <DevTools />

      <GridFrame />
      {/* <DevConsole /> */}
    </div>
  );
}

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={_AppStore}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export {
  useAppStoreSelector,
  useAppStoreDispatch
}
