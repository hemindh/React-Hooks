import React , {useContext} from 'react';
import { countContext } from '../App';

const ReducerA = () => {

 const CountContext = useContext(countContext);

  return (
    <div>
        
        ReducerA - {CountContext.countState} &nbsp;
        <button onClick={() => CountContext.countDispatch('Increment')}>Increment</button>
        <button onClick={() => CountContext.countDispatch('Decrement')}>Decrement</button>
        <button onClick={() => CountContext.countDispatch('Reset')}>Reset</button>
        
    </div>
  )
}

export default ReducerA