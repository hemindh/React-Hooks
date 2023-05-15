import React, { useEffect, useState } from "react";

const UseEffectAsync = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var a = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response); //Here Give the response when we are using with async await.........
      const Data = await response.json();
      console.log("Data", Data); //Give here Api 100 data of users.....................
      setData(Data);
    };
    a();
  }, []);

  return (
    <>
      <center>
        <table>
          <thead
            style={{
              width: "100%",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <th style={{padding : "5px"}}>Id</th>
            <th>Title</th>
            <th>Body</th>
          </thead>
          {data.map((userData) => {
            return (
              <tr key={userData.id} style={{backgroundColor : "lightGreen" }}>
                <td style={{padding : '16px' , textAlign : "center"}}>{userData.id}</td>
                <td style={{padding : '16px' , textAlign : "center"}}>{userData.title}</td>
                <td style={{padding : '16px' , textAlign : "center"}}>{userData.body}</td>
              </tr>
            );
          })}
        </table>
      </center>
    </>
  );
};

export default UseEffectAsync;
