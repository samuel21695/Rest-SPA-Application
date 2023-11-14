// 데이터를 가져올 URL
const apiUrl = "https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot?serviceKey=jdJ4n%2BmtGnAwWjjroAWSRUmiCdIIIhT7KKsWAJ7Y0YCkPON4QyGZueSv41KqWkC9qn3p2pFqaOSYkezbhnWTBQ%3D%3D&pageNo=1&numOfRows=10"

// fetch 함수를 사용하여 데이터를 가져오기
fetch(apiUrl)
  .then(response => {
    // 서버 응답을 JSON 형태로 파싱
    return response.json();
  })
  .then(data => {
    // 파싱된 데이터를 이용하여 원하는 작업 수행
    console.log(data);
  })
  .catch(error => {
    // 오류 처리
    console.error('데이터를 가져오는 중 오류 발생:', error);
  }); 