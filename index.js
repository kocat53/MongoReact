const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { User } = require('./models/user');
const config = require('./config/key');

//application/x-www-from-urlencoded 로된 걸 가져올수있게 함
app.use(bodyParser.urlencoded({ extended: true }));

//application json 타입으로 된걸 분석해서 가져올수 있음
app.use(bodyParser.json());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('connected'))
  .catch(err => console.log('error'));

app.get('/', (req, res) => res.send('<h1>나온다</h1>'));
app.listen(port, () => console.log(`샘플의 포트는${port}`));

//   회원가입을 위한 라우터
app.post('/register', (req, res) => {
  // 필요한 정보를 가져와서 BD에 입력

  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true
    });
  });
});
