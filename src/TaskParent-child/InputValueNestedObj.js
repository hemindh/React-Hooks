import React, { useState } from "react";

const InputValueNestedObj = () => {
  const [detail, SetDetail] = useState({
    Name: "My Image 1",
    artwork: {
      Title: "Door type Decorative",
      City: "Surat",
      Image:
        "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?cs=srgb&dl=pexels-pixabay-235986.jpg&fm=jpg",
    },
  });

  const handleName = (e) => {
    SetDetail({
      ...detail,
      Name: e.target.value,
    });
  };

  const handleArtWorkTitle = (e) => {
    SetDetail({
      ...detail,
      artwork: {
        ...detail.artwork,
        Title: e.target.value,
      },
    });
  };

  const handleArtWorkCity = (e) => {
    SetDetail({
      ...detail,
      artwork: {
        ...detail.artwork,
        City: e.target.value,
      },
    });
  };

  const handleArtWorkImage = (e) => {
    SetDetail({
      ...detail,
      artwork: {
        ...detail.artwork,
        Image: e.target.value,
      },
    });
  };

  return (
    <>
      <h1>Nested Object Updating</h1>

      <label>Name : </label>
      <input type="text" value={detail.Name} onChange={handleName} />
      <br />

      <label>Title : </label>
      <input
        type="text"
        value={detail.artwork.Title}
        onChange={handleArtWorkTitle}
      />
      <br />

      <label>City : </label>
      <input
        type="text"
        value={detail.artwork.City}
        onChange={handleArtWorkCity}
      />
      <br />

      <label>Image : </label>
      <input
        type="text"
        value={detail.artwork.Image}
        onChange={handleArtWorkImage}
      />
      <br />

      <p>
        <i>{detail.Name}</i> <br />
        <i>{detail.artwork.Title}</i>
        {" by "}
        {detail.Name}
        <br />
        {`Located in ${detail.artwork.City}`} <br />
        <img
          src={detail.artwork.Image}
          style={{ height: "300px", width: "400px" }}
          alt={detail.artwork.Title}
        />
      </p>
    </>
  );
};

export default InputValueNestedObj;
