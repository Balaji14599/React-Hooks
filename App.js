import React from 'react';
import  {useSet} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import reportWebVitals from './reportWebVitals';


function Reacthooks()
{
  const [count,updateCount] = useSet(0);
  return(
    <div>
      <p>You clicked count times</p>
      <button type="button" onClick = {() => updateCount(count + 1)} >
        Click me!
      </button>
    </div>
  )
}

reportWebVitals();