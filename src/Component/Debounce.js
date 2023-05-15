import axios from "axios";
import React, { useEffect, useState } from "react";


function Debounce() {
  const [Input, setInput] = useState("");

  useEffect(() => {
    const getData = setTimeout(() => {
      axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        console.log(response.data[1]);
      });
    }, 2000)
    
}, []);
  return (
    <div className="app">
      <input
        placeholder="Search Input.."
        value={Input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default Debounce;