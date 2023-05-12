import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectSix = () => {

   const [posts , setPosts] = useState({});
   const [id , setId] = useState(1)

   useEffect(() => {
     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
     .then(res => {
        console.log(res);
        setPosts(res.data)
     })
     .catch(err => {
        console.log(err);
     })
   } , [id])


  return (
    <>

       <input
        type='text'
        value={id}
        onChange={e => setId(e.target.value)}
       /><br/>

       <span>Here is the user input wise show the Data Title</span><br/><br/>

       <h3>{posts.title}</h3>

       {/* <ul>
        {
            posts.map(post => <li key={post.id}>{post.title}</li>)
        }
       </ul> */}

    </>
  )
}

export default UseEffectSix