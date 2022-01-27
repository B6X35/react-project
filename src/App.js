import { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import Header from './components/Header';
import PublicRoute from './Routers/PublicRoute';
import PrivateRoute from './Routers/PrivateRoute';

import { currentUser } from './redux/auth/authOperation';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import DiaryPage from './pages/DiaryPage';
import CalculatorPage from './pages/CalculatorPage';

function App() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  console.log(token)
  const isFetchCurrentUser = useSelector(state => state.auth.isFetchCurrentUser);
  console.log(useSelector((state) => state.auth.user.id))

  useEffect(() => {
    token && dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
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
          {!isFetchCurrentUser && (
            <>
              <PrivateRoute exact path="/diary-page">
                <DiaryPage />
              </PrivateRoute>
              <PrivateRoute exact path="/calculator">
                <CalculatorPage />
              </PrivateRoute>
            </>
          )}
        </Switch>
      </div>
    </>
  );
}

export default App;
