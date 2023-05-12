
// Below Example is created same with using useEffect Hook and useReducer Hook....................
import React , {useEffect , useReducer} from 'react'
import axios from 'axios';

const initialState = {
    isLoading : true,
    error : '',
    posts : {}
}

const reducer = (state , action) => {
    switch(action.type){
       case 'FETCH_SUCCESS' :
        return {
            isLoading : false,
            posts : action.payload,
            error : ''
        }

        case 'FETCH_ERROR' :
        return {
            isLoading : false,
            posts : {},
            error : 'Something Went Wrong !!!'
        }

        default :
         return state
    }
}

const UseReducerFour = () => {

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            
            // console.log(response.data)
            dispatch({type : 'FETCH_SUCCESS' , payload : response.data })
        })
        .catch(error => {
            dispatch({type : 'FETCH_ERROR'})
        })
    })

    const [state , dispatch] = useReducer(reducer , initialState)
    
  return (
    <>

  <h2>
    
   {
     state.isLoading ? 'Loading' : state.posts.title
   }

 {
     state.error ? state.error : null
 }
    </h2>      

    </>
  )
}

export default UseReducerFour


































// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UseReducerFour = () => {

//    const [isLoading , setIsLoading] = useState(true);
//    const [error , setError] = useState('');
//    const [posts , setPosts] = useState({});


//    useEffect(() => {
//       axios
//       .get('https://jsonplaceholder.typicode.com/posts/1')
//       .then(response => {
//         setIsLoading(false);
//         setError('');
//         setPosts(response.data)
//       })
//       .catch(error => {
//         setIsLoading(false);
//         setError('Somthing went Wrong !!!');
//         setPosts({});
//       } ,[])
//    })



//   return (
//     <>

//   {
//     isLoading ? 'Loading' : posts.title
//   }

// {
//     error ? error : null
// }


//     </>
//   )
// }

// export default UseReducerFour