import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList/TodoList';
import PropertiesDemo from './PropertiesDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <PropertiesDemo />
       <TodoList /> 
      </header>
    </div>
  );
}

export default App;
