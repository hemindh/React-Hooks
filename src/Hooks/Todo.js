import React, { useState } from 'react';
import '../App.css'

const Todo = () => {

   const [Items , setItems] = useState('');
   const [AddList , setAddList] = useState([]);
   const [Toggle , setToggle] = useState(true);
   const [isEditItem , setIsEditItem] = useState(null);
    

   const AddItems = () => {
    //   console.log(Items)


    //Here we can validate if user no Add the any items then show alert Message
    if(!Items){
        alert("Please Add the Items");
    }else if(Items && !Toggle){
        setItems(
            AddList.map((items) => {
                if(items.id === isEditItem){
                    return {...items , value : Items}
                }
                return items;
            })
            )
             setToggle(true); 

             setItems(' ')

             setIsEditItem(null)
    }

    //Here we can Add the Items id and value 
    const Adding = {
        id:Math.floor(Math.random() * 100),
        value:Items
    }

//    console.log(Adding.id)

    //setList of Items in newItemList
     setAddList(oldItems => [...oldItems , Adding]);

     setItems("")
   }






   const UpdateItem = (id) => {
    //First user is click the Items id with using Array find method
    //second step toggle the add button to Update Button(simply condition threw update the icon with using state)

    let newEditItem = AddList.find((items) => {
        return items.id === id;  
    })

    //    console.log(newEditItem) //Here We get the id and value of clicking item 
   
       setToggle(false); //toggle button add and edit

       setItems(...Items , newEditItem.value) //Set the edit value in setItems(mean input)

       setIsEditItem(newEditItem.id)
   
    }








 

    //Here We can delete the Items
   const DeleteItem = (id) => {
    const NewArray = AddList.filter(items => items.id !== id);
    setAddList(NewArray)
   }

  return (
    <>
      <div className='Main_container'>

        <h2 className='header_App'>To Do App</h2>
        <p className='para'>Here Items Insert , Update And Delete..............</p><br/>


        <input 
          className='Input_Add'
          type='text'
          placeholder='Add Items......'
          value={Items}
          onChange={(e) => setItems(e.target.value)}
        />
       {

          Toggle ? 
          <button onClick={AddItems} className='Button_Add'>Add</button>
          :
          <button onClick={AddItems} className='Button_Add' style={{backgroundColor : ' rgb(73, 73, 248)' , color : 'white'}}>Update</button>


       }
      

   
        {
            AddList.map((items => {
                return(
                    <li key={items.id} className='List_added'>
                        <div>
                        {items.value}
                        <button onClick={() => UpdateItem(items.id)} className='Update_Item'>Update</button>
                        <button onClick={() => DeleteItem(items.id)} className='Delete_Item'>Delete</button>

                        </div>
                    </li>
                )
            }))
        }
      </div>

    </>
  )
}

export default Todo