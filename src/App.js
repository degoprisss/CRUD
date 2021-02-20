import logo from './logo.svg';
import './App.css';
import './Normalize.css'
import axios from 'axios'
import TodoContainer from './TodoContainer.js'
import { useEffect, useState } from 'react';
import CreateTodo from './CreateTodo.js'

function App() {
  

  return (
    <div className="App">
      <div className='create'>
      <CreateTodo />
      </div>
      <div className='todoContainer'>
        <TodoContainer/>
      </div>
    </div>
  );
}

export default App;
