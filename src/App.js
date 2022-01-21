import './App.css';
import { Switch, Route } from 'react-router-dom';

import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="container">
      {/* <Header /> */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Switch>
        <Route exact path="/registration">
          <RegistrationPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
      {/* </Suspense> */}
    </div>
  );
}

export default App;
