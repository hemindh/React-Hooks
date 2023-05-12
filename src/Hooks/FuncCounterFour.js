import React, { useState } from "react";

const FuncCounterFour = () => {
  const [Items, setItems] = useState([]);
  const [liked , setLiked] = useState(true); //Here Example of checkbox

  const addNumber = (item) => {
    setItems([
      ...Items,
      {
        id: item.length,
        value: Math.floor(Math.random() * 100) + 1,
      },
    ]);
  };

  const checkLike = (e) => {
    setLiked(e.target.checked)
  }

  return (
    <>
      <h3>useState Dealing With Array......</h3>
      <br />
      <button onClick={addNumber}>Add aRandom Number</button>
      <br />
      <input 
        type="checkbox"
        checked={liked}
        onChange={checkLike}
      />
      <p>{liked ? "You are liked" : 'Did not liked this'}</p>

      <ul>
        {Items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </>
  );
};

export default FuncCounterFour;
