import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

   const [Blog , setBlog] = useState([
    {
      id:1,
      title : 'Blog 1',
      body : 'This is Blog 1 Content'
    },

    {
      id:2,
      title : 'Blog 2',
      body : 'This is Blog 2 Content'
    },

    {
      id:3,
      title : 'Blog 3',
      body : 'This is Blog 3 Content'
    },

   ])

   const handleDelete = (id) => {
       const newBlog =  Blog.filter((Blog)=>
           Blog.id !== id
       )

       setBlog(newBlog);
   }

  return (
    <>
      <h3>Parent Component</h3>
      <p>All Blog ! title is passed by using props</p>
      <Child Blog={Blog} title="All Blogs !" handleDelete={handleDelete}/>
    </>
  )
}

export default Parent;