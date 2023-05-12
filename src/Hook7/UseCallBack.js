import React, { useState , useCallback } from 'react'
import Todo from './Todo';

const UseCallBack = () => {

  const [counter , setCounter] = useState(0);
  const [todos , setTodos] = useState([]);


const Increment = () => {
    setCounter(counter + 1)
}

const addTodo = useCallback(() => {
    setTodos((t) => [...t , "New Todo"])
},[todos])

  return (
    <>
          <h3>useCallback Hook ..........</h3>

           <Todo todos={todos} addTodo={addTodo}/>
       <div>
          <h1>Count : {counter}</h1>
          <button onClick={Increment} style={{width : "30px"}}>+</button>

       </div>
    </>
  )
}


export default UseCallBack;

//useCallback Hook :-

//useCallback Hook returns a  memoized callback function.
//when we are add Todo and Increment the counter then all time re-render the child component log
//so
//Tena solution mate addTodo Function ne useCallback Hook ma pass kri ne dependency threw stop the re-rendering of the component 
//Child component logs is run with using hoisting concept
// Here we can playing with function and inner useMemo we can play with value.............




//memo(component) pass kri ne child mathi thata insential callback function ne re-render thata stop karavi shakai che 

//Wrap the Todos component export in memo .............. after we can stop the re-rendering
//Many Child component is there in our application then all child component warp by the memo(Component)


