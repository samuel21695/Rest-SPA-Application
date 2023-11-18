import express from ('express');
import path from ('path');
import routes from ('./routes/routes')

const app = express();
const port = 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`서버가 http://loaclhost:${port}에서 실행 중 입니다.`)
});