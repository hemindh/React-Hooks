import React from 'react'

const Child = ({ Blog , title ,handleDelete }) => {
  return (
    <>
       <h2>Child Component</h2>
       <h1>{title}</h1>
       {
        Blog.map((Blogs) => (
             <div key={Blogs.id}>

                 <h3>{Blogs.title}</h3>
                 <p>{Blogs.body}</p>

                 <button onClick={() => handleDelete(Blogs.id)}>Delete Blog !</button>
             </div>
            
        
       ))}
    </>
  )
}

export default Child