import { Switch, Route } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';

// import s from './App.module.css';
function App() {
  return (
    <div>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      {/* <Switch>
        <Route exact path="/registration">
          <RegistrationPage />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch> */}
      {/* </Suspense> */}
    </div>
  );
}

export default App;
