import React, { useState } from "react";
import '../App.css'

const TList = () => {
  //   usestate threw set the input additem
  const [Item, setNewItem] = useState("");
  const [addItems, setItems] = useState([]);

  {
    /* Helper Function  */
  }
  const addItem = () => {
    if (!Item) {
      alert("Please add The Item.......");
      return;
    }

    const check = {
      id: Math.floor(Math.random() * 1000),
      value: Item,
    };

    setItems(oldList => [...oldList, check]);
    setNewItem("");

    //    console.log(addItems) // here we can check the array item is add or not............
  };


  const deleteItem = (id) => {
    const newArray = addItems.filter(item => item.id !== id)
    setItems(newArray)
  }


  
  return (
    <>
    <div className="main_container">


      {/* Header  */}
      <h1 className="header">To Do List</h1>   

      {/* Input and Button  */}

      <input
        type="text"
        className="myInput"
        placeholder="Add the Item....."
        value={Item}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()} className="mybtn">Add Item</button>

      {/* List of the Item  */}
      {/* Here we can add the list of items  */}

      <ul>
        {addItems.map(items => 
           (
          <li key={items.id} className="res">
            
            {items.value}
            <button onClick={() => deleteItem(items.id)} className="dlt">Delete</button>
          
          </li>
          )
          
        )}
      </ul>
    </div>

      {/* <ul>  
       <li>cricket</li>
       <li>Football</li>
       <li>others game....</li>
     </ul> */}
    </>
  );
};

export default TList;
