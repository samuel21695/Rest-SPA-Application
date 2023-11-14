const express = require('express');
const https = require('https');

const app = express();
const port = 3000;

// 미들웨어 설정
app.use(express.json());

// 라우트 설정
app.get('/fetchData', (req, res) => {
  // OpenAPI 엔드포인트 URL
  const apiUrl = 'http://apis.data.go.kr/6300000/openapi2022/tourspot';

  // HTTPS 모듈을 사용하여 데이터를 가져옴
  https.get(apiUrl, (apiRes) => {
    let data = '';

    // 데이터를 가져오는 중
    apiRes.on('data', (chunk) => {
      data += chunk;
    });

    // 데이터를 모두 가져왔을 때
    apiRes.on('end', () => {
      try {
        const jsonData = JSON.parse(data);
        // 가져온 데이터를 클라이언트에게 응답
        res.json(jsonData);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  }).on('error', (error) => {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});