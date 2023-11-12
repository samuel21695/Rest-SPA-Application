const apiUrl = "http://apis.data.go.kr/6300000/openapi2022/tourspot";
const apiKey = "jdJ4n%2BmtGnAwWjjroAWSRUmiCdIIIhT7KKsWAJ7Y0YCkPON4QyGZueSv41KqWkC9qn3p2pFqaOSYkezbhnWTBQ%3D%3D";

// API에 요청 보내기
fetch(apiUrl, {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
})
.then(response => {
  // HTTP 상태 코드 확인
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  // JSON 형식의 데이터 추출
  return response.json();
})
.then(data => {
  // 데이터 활용
  console.log(data);
})