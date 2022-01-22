import './App.css';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import DiaryProductsListItem from './components/DiaryProductsListItem';
import BurgerCloseButton from './components/SharedComponents/BurgerCloseButton';

// import RegistrationPage from './pages/RegistrationPage';
// import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="container">
      <DiaryProductsListItem
      // arr={[1, 12, 123, 1234, 12345, 1234, 512345, 12345, 12345, 12345, 12345, 12345, 12345]}
      />
      {/* <Header /> */}
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
