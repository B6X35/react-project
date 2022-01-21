import './App.css';
import { Switch, Route } from 'react-router-dom';

import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import DiaryProductsListItem from './components/DiaryProductsListItem';

function App() {
  return (
    <div>
      <DiaryProductsListItem
        arr={[
          '1w',
          '1d1',
          '12',
          '12a3',
          '2f',
          '2s1',
          '22',
          '1ee',
          '1f1',
          '12',
          '123',
          '2',
          '2gg1',
          '2yh2',
          '1',
          '11',
          '12',
          '1sd23',
          '2',
          '2rf1',
          '24erf2',
          '1w',
          '1d1',
          '12',
          '12a3',
          '2f',
          '2s1',
          '22',
          '1ee',
          '1f1',
          '12',
          '123',
          '2',
          '2gg1',
          '2yh2',
          '1',
          '11',
          '12',
          '1sd23',
          '2',
          '2rf1',
          '24erf2',
          '1w',
          '1d1',
          '12',
          '12a3',
          '2f',
          '2s1',
          '22',
          '1ee',
          '1f1',
          '12',
          '123',
          '2',
          '2gg1',
          '2yh2',
          '1',
          '11',
          '12',
          '1sd23',
          '2',
          '2rf1',
          '24erf2',
        ]}
      />
    </div>
  );
}

export default App;
