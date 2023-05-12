import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectFive = () => {

   const [posts , setPosts] = useState([]);

   useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(res => {
        console.log(res);
        setPosts(res.data)
     })
     .catch(err => {
        console.log(err);
     })
   } , [])


  return (
    <>

       <p>Data Fetching With UseEffect Hook in React</p><br/>
       <p>Data Fetching with using <b> axios............</b></p><br/>

       <ul>
        {
            posts.map(post => <li key={post.id}>{post.title}</li>)
        }
       </ul>

    </>
  )
}

export default UseEffectFive