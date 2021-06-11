import React from 'react';
import {useState ,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import reportWebVitals from './reportWebVitals';



function Reacthooks()
{
    const [count,updateCount] = useState(0);
    useEffect(() =>
    {
      console.log({count})
    } )
    
    return(
      <div>
        <p>You clicked {count} times</p>
          <button type="button" onClick = {() => updateCount(count + 1)} >
            Click me!
          </button>
          <button></button>
      </div> 
    );
}
ReactDOM.render(<Reacthooks />,document.getElementById('root'));
reportWebVitals();
