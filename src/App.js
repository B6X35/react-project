import './App.css';
import { Switch, Route } from 'react-router-dom';

import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import DiaryProductsListItem from './components/DiaryProductsListItem';

function App() {
  return (
    <div>
      <DiaryProductsListItem />
    </div>
  );
}

export default App;
