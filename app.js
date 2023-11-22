const express = require('express');
const routes = require('./routes/routes.js');

const app = express();
const port = 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중 입니다.`)
});