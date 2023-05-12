import React, { useReducer } from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter : 100,
}
const reducer = (state , action) => {
   
    switch(action.type){
      case 'Increment' :
        return {...state , firstCounter : state.firstCounter + action.payload}
      case 'Decrement' :
        return {...state , firstCounter : state.firstCounter - action.payload}
        case 'Increment 2' :
        return {...state , secondCounter : state.secondCounter + action.payload}
      case 'Decrement 2' :
        return {...state , secondCounter : state.secondCounter - action.payload}
      case 'Reset' :
        return initialState
      default :
        return state;    
    }
}

const UseReducerTwo = () => {


   const [count , dispatch] = useReducer(reducer , initialState);

  return (
    <>
     <h2>Count : {count.firstCounter}</h2>

     <h2>Count : {count.secondCounter}</h2>

     <button onClick={() => dispatch({type : 'Increment' , payload : 1})}>Increment</button>
     <button onClick={() => dispatch({type : 'Decrement' , payload : 1})}>Decrement</button>
     <button onClick={() => dispatch({type : 'Increment' , payload : 5})}>Increment By 5</button>
     <button onClick={() => dispatch({type : 'Decrement' , payload : 5})}>Decrement By 5</button>
     <div>
     <button onClick={() => dispatch({type : 'Increment 2' , payload : 2})}>Increment 2</button> 
     <button onClick={() => dispatch({type : 'Decrement 2' , payload : 2})}>Decrement 2</button>
     </div>
     <button onClick={() => dispatch({type : 'Reset'})}>Reset</button>


    </>
  )
}

export default UseReducerTwo;


//Here we can use the initial state as an Object
//inner Object we can use the type , value(payload) and use of spread operator
//using the object we can simply pass the value(payload)as an object and easily use in the reducer function.....
//payload(value).............................................

//payload = 1 means +1 and 5 means +5 in initialstate and 2 means +2...........