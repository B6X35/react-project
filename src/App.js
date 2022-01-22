import './App.css';

import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import DiaryProductsListItem from './components/DiaryProductsListItem';
import BurgerCloseButton from './components/SharedComponents/BurgerCloseButton';

function App() {
  return (
    <div>
      <DiaryProductsListItem
      // arr={[1, 12, 123, 1234, 12345, 1234, 512345, 12345, 12345, 12345, 12345, 12345, 12345]}
      />
      <BurgerCloseButton />
    </div>
  );
}

export default App;
