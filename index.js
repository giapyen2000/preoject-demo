const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/demo', function (req, res) {
    return res.json('Hello World')
})
     
app.listen(3000, () => {
    console.log('starting')
})