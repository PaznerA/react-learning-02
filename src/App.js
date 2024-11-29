import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <img src={logo} className="App-logo" alt="logo" />
        <Outlet />
      </header>
    </div>
  );
}

export default App;
