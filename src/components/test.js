import React from "react";

let _randomDog = ""

function RandomAnimalImage() {
  const _URL = "https://dog.ceo/api/breeds/image/random";
  fetch(_URL)
    .then(response => response.json())
    .then(data => {
      _randomDog = data.message;
      return(
        <img src={_randomDog}></img>
      )
    })
}

function TestImg() {
  return(
    <img src="https://lh3.googleusercontent.com/ogw/AKPQZvx2x5nuxgoQ9nFa6HEE02zohl5PVaiPVukhax7r=s64-c-mo" className="w"></img>
  )
}

function Body2() { 
  return (
    <div className="w-70vw h-60vh display-f align-center justify-center">
      <div className="fs-4em">◀</div>
      <div>
        <div className="w-50vw h-50vh bgc-w border-rad-20px">
          <div className="w-50vw h-25vh display-f">
            <div className="w-25vw h-25vh display-f align-center justify-center">
              < TestImg/>
            </div>
            <ul className="w-25vw h-25vh list-inside">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="w-50vw h-10vh"></div>
          <div className="w-50vw h-10vh"></div>
        </div>
      </div>
      <div className="fs-4em">▶</div>
    </div>
  );
}

export default Body2;

