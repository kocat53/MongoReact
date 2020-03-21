const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://pjs:1234qwer@bolierplate-azzcr.mongodb.net/test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  )
  .then(() => console.log('연결됨'))
  .catch(err => console.log('에러당'));

app.get('/', (req, res) => res.send('안녕~'));
app.listen(port, () => console.log(`샘플의 포트는${port}`));
