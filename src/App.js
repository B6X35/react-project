import './App.css';
import Button from './components/SharedComponents/Button';

//{ text = 'My text', isActive = true, type = 'button', pathName, onClick }

function App() {
  return <Button isActive={false} pathName={'/home'} />;
}

export default App;
