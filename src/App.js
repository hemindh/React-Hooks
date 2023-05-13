// import { createContext } from "react";
// import React , {useReducer} from 'react'
import "./App.css";
import UseDefOne from "./UseDefferedValue/UseDefOne";
// import UseEffectAsync from "./Component/UseEffectAsync";

// import UseCallBack from "./Hook7/UseCallBack";
// import Count from "./Hook8CustomeHook/Count";
// import CustomTwo from "./Hook8CustomeHook/CustomTwo";
// import DocTitleOne from "./Hook8CustomeHook/DocTitleOne";
// import DocTitleTwo from "./Hook8CustomeHook/DocTitleTwo";
// import UserInput from "./Hook8CustomeHook/UserInput";
// import UseIdOne from "./UseId/UseIdOne";
import UseTransitionOne from "./UseTransition/UseTransitionOne";

// import UseMemoOne from "./Hook6/UseMemoOne";


// import Basic from "./Component/Basic";
// import ComA from "./Hook4/ComA";
// import ComC from "./Hook4/ComC";

// export const UserContext = createContext();
// export const ChannelContext = createContext();


// import UseReducerOne from './Hook5/UseReducerOne';
// import UseReducerThree from "./Hook5/UseReducerThree";
// import UseReducerTwo from "./Hook5/UseReducerTwo";
// import UseReducerFour from "./Hook5/UseReducerFour";
// import ReducerA from './Hook5/ReducerA'
// import ReducerB from './Hook5/ReducerB'
// import ReducerC from './Hook5/ReducerC'
// export const countContext = createContext();

// import UseRefOne from './Hook3/UseRefOne';
// import UseRefTwo from './Hook3/UseRefTwo';
// import UseEffectSeven from './Hooks2/UseEffectSeven';
// import UseEffectSix from './Hooks2/UseEffectSix';
// import UseEffectFive from './Hooks2/UseEffectFive';
// import UseEffectFour from './Hooks2/UseEffectFour';
// import UseEffectThree from './Hooks2/UseEffectThree';
// import UseEffectOne from './Hooks2/UseEffectOne';
// import UseEffectTwo from './Hooks2/UseEffectTwo';

// import Todo from './Hooks/Todo';
// import FuncCounterFour from './Hooks/FuncCounterFour';
// import FuncCounterThree from './Hooks/FuncCounterThree';
// import ClassCounter from './Hooks/ClassCounter';
// import FuncCounterHook from './Hooks/FuncCounterHook';
// import FuncCounterHookTwo from './Hooks/FuncCounterHookTwo';

// import Accordion from './TaskParent-child/Accordion';
// import TList from './TaskParent-child/TList';
// import InputValue from './TaskParent-child/InputValue';
// import InputValueNestedObj from './TaskParent-child/InputValueNestedObj';
// import JsxObj from './JsxObj';
// import ClassComp from './Component/ClassComp';
// import File1 from './Component/File1';

// import Parent from './TaskParent-child/Parent';
// import PropsEx from './TaskParent-child/PropsEx';

// import EventChangeDemo from './TaskParent-child/EventChangeDemo';

// const initialState = 0;
// const reducer = (state , action) => {
//   // console.log(state); //Here we can updated state(newState is return)
//   switch(action){
//     case 'Increment' :
//       return state + 1
//     case 'Decrement' :
//       return state - 1
//     case 'Reset' :
//       return initialState
//     default :
//       return state;    

//   }
// }


function App() {

// const [count , dispatch] = useReducer(reducer , initialState)

  return (
    <div className="App">
      <>
        {/* <h1>Hello React</h1> */}

        {/* Basic intro of class component and function component with condition and jsx  */}
        {/* <File1 /> */}
        {/* <ClassComp /> */}
        {/* <JsxObj /> */}

        {/* Usefull Examples of a props how we can use , pass , recognize(olkhavu) and change the props  */}
        {/* <Parent /> */}
        {/* <PropsEx 
          title="Simple attribute is pass as a props" 
          src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          name1='Vaibhav'
          name2='Hemin'
        /> */}

        {/* <EventChangeDemo /> */}

        {/* <InputValue /> */}
        {/* <InputValueNestedObj /> */}

        {/* <TList /> */}

        {/* <Accordion /> */}
        firstId
        {/* <Todo /> */}

        {/* <UseEffectOne /> */}
        {/* <UseEffectTwo /> */}
        {/* <UseEffectThree /> */}
        {/* <UseEffectFour /> */}
        {/* <UseEffectFive /> */}
        {/* <UseEffectSix /> */}
        {/* <UseEffectSeven /> */}

        {/* <UseRefOne /> */}
        {/* <UseRefTwo /> */}

        {/* <UserContext.Provider value={'Ram'}>
          <ChannelContext.Provider value={'Epic Ramayan'}>
            <ComC />
            <br/>
            <ComA />
          </ChannelContext.Provider>
        </UserContext.Provider> */}




         {/* <UseReducerOne /> */}firstId
         {/* <countContext.Provider value={{ countState : count , countDispatch : dispatch }}>
            Count - {count}
                <ReducerA />
                <ReducerB />
                <ReducerC />
         </countContext.Provider> */}
         {/* <UseReducerFour /> */}


         {/* <UseMemoOne /> */}

         {/* <Basic /> */}

         {/* <UseCallBack /> */}

         {/* <CustomTwo /> */}
         {/* <DocTitleOne />
         <DocTitleTwo /> */}

         {/* <Count /> */}
         {/* <UserInput /> */}

         {/* <UseEffectAsync /> */}
         {/* <UseIdOne /> */}
         
         {/* <UseTransitionOne /> */}
         <UseDefOne />
      </>
    </div>
  );
}

export default App;
