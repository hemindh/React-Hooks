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

const UseReducerOne = () => {


   const [count , dispatch] = useReducer(reducer , initialState);

  return (
    <>
     <h2>Count : {count}</h2>
     <button onClick={() => dispatch('Increment')}>Increment</button>
     <button onClick={() => dispatch('Decrement')}>Decrement</button>
     <button onClick={() => dispatch('Reset')}>Reset</button>


    </>
  )
}

export default UseReducerOne;


//javascript :-
//reducer function reduce the one value inner the entire (all our) array
//here 3 step follow :- 


//useReducer Hook is Alternative the useState Hook
// 1.import useReducer and useReducer define It's take 2 Argument useReducer(reducer(function) , initialState)
// 2.reducer(function) is define at the component upon top level and It's take 2 parameter reducer(CurrentState and action)
// 3rd and final step :- Also useReducer is return the 2 array pair value first initial value and second dispatch
// const [count , dispatch] 
//dispatch method is same like as setState function [dispatch method is dispatch the action Ex :- dispatch('Increment)]
//reducer function is also return a newState (means reducer function is accept a currentState and return a newState)