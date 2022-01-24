import './App.css';

import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
// import RegistrationPage from './pages/RegistrationPage';
// import DiaryProductsListItem from './components/DiaryProductsListItem';
import DiaryProductsList from './components/DiaryProductsList';
import BurgerCloseButton from './components/SharedComponents/BurgerCloseButton';
// import RoundButton from './components/SharedComponents/RoundButton';
// import DiaryPage from './pages/DiaryPage';

// import RegistrationPage from './pages/RegistrationPage';
// import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage/MainPage';
// import DailyCalorieIntake from './components/DailyCalorieIntake';

// const { id, productWeight, productTitle, calories } = item;

function App() {
  return (
    <div className="container">
      {/* <DiaryProductsList /> */}
      <MainPage />
      {/* <DailyCalorieIntake /> */}
      {/* <DiaryProductsListItem /> */}
      {/* <DiaryProductsList
        arr={[
          { id: 1, productWeight: 100, productTitle: 'meat', calories: 123 },
          { id: 2, productWeight: 100, productTitle: 'meat', calories: 123 },
          { id: 3, productWeight: 100, productTitle: 'meat', calories: 123 },
          { id: 4, productWeight: 100, productTitle: 'meat', calories: 123 },
          { id: 5, productWeight: 100, productTitle: 'meat', calories: 123 },
          { id: 6, productWeight: 100, productTitle: 'meat', calories: 123 },
          { id: 7, productWeight: 100, productTitle: 'meat', calories: 123 },
          { id: 8, productWeight: 100, productTitle: 'meat', calories: 123 },
          { id: 9, productWeight: 100, productTitle: 'meat', calories: 123 },
          { id: 10, productWeight: 100, productTitle: 'meat', calories: 123 },
          { id: 11, productWeight: 100, productTitle: 'meat', calories: 123 },
          { id: 12, productWeight: 100, productTitle: 'meat', calories: 123 },
          { id: 13, productWeight: 100, productTitle: 'meat', calories: 123 },
        ]}
      /> */}
      {/* <RoundButton /> */}
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
      {/* <DiaryPage /> */}
    </div>
  );
}

export default App;
