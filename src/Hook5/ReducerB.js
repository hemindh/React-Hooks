import React, { useContext } from 'react'
import { countContext } from '../App';

const ReducerB = () => {
    const CountContext = useContext(countContext);

  return (
    <div>
        
        ReducerB - {CountContext.countState} &nbsp;
        <button onClick={() => CountContext.countDispatch('Increment')}>Increment</button>
        <button onClick={() => CountContext.countDispatch('Decrement')}>Decrement</button>
        <button onClick={() => CountContext.countDispatch('Reset')}>Reset</button>
        
        
    </div>
  )
}

export default ReducerB