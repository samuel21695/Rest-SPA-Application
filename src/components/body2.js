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

  function handleBack() {
    // 초기 화면으로 돌아가는 코드 추가
    // 예: location.reload(); 또는 contentContainer.innerHTML = '초기화면의 HTML 코드';
    location.reload(); // 페이지 새로고침을 통해 초기 상태로 돌아가는 예시
  }

  return (
    <div className="w-70vw h-60vh display-f align-center justify-center">
      <div className="fs-4em cursor">‹</div>
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
          <div className="w-25vw h-10vh text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta provident accusantium quos est natus fugiat dolor nobis minus iusto facilis.</div>
          <div className="w-25vw h-10vh display-f align-center justify-around">
            <a href="http://example.com">link</a>
            <button className="w-10vw h-5vh">
              Adopt Me!
            </button>
          </div>
        </div>
      </div>
      <div id="next-page" className="fs-4em cursor" onClick={handleBack}>›</div>
    </div>
  );
}

export default Body2;

