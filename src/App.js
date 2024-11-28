import logo from './logo.svg';
import './App.css';
import TodoComponent from './TodoList/TodoComponent';
import PropertiesDemo from './PropertiesDemo';
import ContextDemo from './ContextDemo';
import ExtStateMng from './ExtStateMng';
import UseEffectDemo from './UseEffectDemo';
import { useState } from 'react';

function App() {

  const [renderTest, setRenderTest] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {renderTest && <UseEffectDemo />}
       <button onClick={setRenderTest(() => false)}>CLEAN</button>
       <ExtStateMng />
       <ContextDemo />
       <PropertiesDemo />
       <TodoComponent /> 
      </header>
    </div>
  );
}

export default App;
