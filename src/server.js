import express from 'express';

const app = express()

app.get('/', function (req, res) {
  res.send('PhanHuuPhuc API Server')
})

const hostName = 'localhost';
const port = 3000;

app.listen(port, hostName, () =>{
    console.log(`http://${hostName}:${port}`);
})