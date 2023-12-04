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
      <div className="fs-4em">‹</div>
      <div>
        <div className="w-30vw h-50vh bgc-w border border-rad-20px m-5vw display-f flex-column align-center">
          <div className="w-30vw h-25vh display-f ">
            <div className="w-30vw h-25vh display-f align-center justify-center">
              < RandomDogImage/>
            </div>
            <ul className="w-25vw h-25vh list-inside display-f flex-column justify-center">
              <li>Name: </li>
              <br></br>
              <li>Age: </li>
              <br></br>
              <li>Gender: </li>
            </ul>
          </div>
          <div className="w-25vw h-10vh text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta provident accusantium quos est natus fugiat dolor nobis minus iusto facilis, sed iure rerum doloribus corporis, tempora unde, eius velit aut.</div>
          <div className="w-25vw h-10vh">
            <a rel="http://example.com">link</a>
            <button></button>
          </div>
        </div>
      </div>
      <div className="fs-4em">›</div>
    </div>
  );
}

export default Body2;

