import logo from './logo.svg';
import './App.css';
import TodoComponent from './TodoList/TodoComponent';
import PropertiesDemo from './PropertiesDemo';
import ContextDemo from './ContextDemo';
import ExtStateMng from './ExtStateMng';
import UseEffectDemo from './UseEffectDemo';
import { useState } from 'react';

function Demos() {

  return (
    <>
       <ExtStateMng />
       <ContextDemo />
       <PropertiesDemo />
       <TodoComponent /> 
    </>
  );
}

export default Demos;
