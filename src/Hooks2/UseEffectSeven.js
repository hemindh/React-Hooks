import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectSeven = () => {

   const [posts , setPosts] = useState({});
   const [id , setId] = useState(1);
   const [idFromdata , setIdFromData] = useState(1);


   const handleClick = () => {
    setIdFromData(id)
   }

   useEffect(() => {
     axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromdata}`)
     .then(res => {
        console.log(res);
        setPosts(res.data)
     })
     .catch(err => {
        console.log(err);
     })
   } , [idFromdata])


  return (
    <>

       <input
        type='text'
        value={id}
        onChange={e => setId(e.target.value)}
       /><br/>
       <button type='button' onClick={handleClick}>Fetch Data</button>

    {/* //Here click mean trigger the button and get the Data title of the api in the useEffect */}
       <h3>{posts.title}</h3>

       {/* <ul>
        {
            posts.map(post => <li key={post.id}>{post.title}</li>)
        }
       </ul> */}

    </>
  )
}

export default UseEffectSeven;