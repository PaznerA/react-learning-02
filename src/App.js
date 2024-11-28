import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList/TodoList';
import PropertiesDemo from './PropertiesDemo';
import ContextDemo from './ContextDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <ContextDemo />
       <PropertiesDemo />
       <TodoList /> 
      </header>
    </div>
  );
}

export default App;
