import React, { useEffect, useState } from "react";

function RandomDogImage() {
  const _URL = "https://dog.ceo/api/breeds/image/random";
  const [_randomDog, setRandomDog] = useState("");

  useEffect(() => {
    fetch(_URL)
      .then(response => response.json())
      .then(data => {
        setRandomDog(data.message);
      });
  }, []);
    
    return(
      <img src={_randomDog} className="w border-rad-20px"></img>
    )      
}

function Body2() { 
  return (
    <div className="w-70vw h-60vh display-f align-center justify-center">
      <div className="fs-4em">◀</div>
      <div>
        <div className="w-30vw h-50vh bgc-w border border-rad-20px ">
          <div className="w-30vw h-25vh display-f">
            <div className="w-30vw h-25vh display-f align-center justify-center">
              < RandomDogImage/>
            </div>
            <ul className="w-25vw h-25vh list-inside display-f flex-column justify-center text">
              <li></li>
              <br></br>
              <li></li>
              <br></br>
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

