// OpenAPI 엔드포인트 URL
const apiURL = 'https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot?serviceKey=jdJ4n%2BmtGnAwWjjroAWSRUmiCdIIIhT7KKsWAJ7Y0YCkPON4QyGZueSv41KqWkC9qn3p2pFqaOSYkezbhnWTBQ%3D%3D&pageNo=1&numOfRows=10';

// fetch 함수를 사용하여 데이터를 불러오기
fetch(apiURL)
  .then(response => {
    // HTTP 응답 코드 확인
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // JSON 형식으로 변환된 응답 데이터 반횐
    return response.json();
  })
  .then(data => {
    // 성공적으로 데이터를 불러왔을 때 처리
    console.log('불러온 데이터:', data);
  })
  .catch(error => {
    // 오류가 발생했을 때 처리
    console.error('데이터를 불러오는 중 오류 발생:', error);
  })