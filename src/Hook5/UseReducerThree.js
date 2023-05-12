import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state , action) => {
    // console.log(state); //Here we can updated state(newState is return)
    switch(action){
      case 'Increment' :
        return state + 1
      case 'Decrement' :
        return state - 1
      case 'Reset' :
        return initialState
      default :
        return state;    

    }
}

const UseReducerThree = () => {


   const [count , dispatch] = useReducer(reducer , initialState);
   const [countTwo , dispatchTwo] = useReducer(reducer , initialState);


  return (
    <>
     <h2>Count : {count}</h2>
     <button onClick={() => dispatch('Increment')}>Increment</button>
     <button onClick={() => dispatch('Decrement')}>Decrement</button>
     <button onClick={() => dispatch('Reset')}>Reset</button>

     <h2>Count : {countTwo}</h2>
     <button onClick={() => dispatchTwo('Increment')}>Increment</button>
     <button onClick={() => dispatchTwo('Decrement')}>Decrement</button>
     <button onClick={() => dispatchTwo('Reset')}>Reset</button>



    </>
  )
}

export default UseReducerThree;


//Here we can use the Multiple useReducer but reducer function is work same................................
//use the another useReducer Hook here [countTwo]