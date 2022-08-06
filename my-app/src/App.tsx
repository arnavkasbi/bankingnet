import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './stores'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';

function App() {
  return (
    <Provider store={store}>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
