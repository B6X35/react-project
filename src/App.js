import { useState } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';

import Modal from './components/Modal'
import Header from './components/Header';
import PublicRoute from './Routers/PublicRoute';
import PrivateRoute from './Routers/PrivateRoute';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import DiaryPage from './pages/DiaryPage';
import CalculatorPage from './pages/CalculatorPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <PublicRoute exact path="/main">
          <MainPage />
        </PublicRoute>
        <PublicRoute exact path="/login" isRestricted>
          <LoginPage />
        </PublicRoute>
        <PublicRoute exact path="/registration" isRestricted>
          <RegistrationPage />
        </PublicRoute>
        <PrivateRoute exact path="/diary-page">
          <DiaryPage />
        </PrivateRoute>
        <PrivateRoute exact path="/calculator">
          <CalculatorPage />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
