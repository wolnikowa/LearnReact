const express = require('express');
const port=8080;
const host='localhost';
const app = express();

app.use('/', express.static('dist'));
app.use('/*',(reg,res) =>  res.sendrile(path.resolve('dist/index.html')));

app.listen(port,host, ()=>{
    console.log('Your page is great and it uses:', port, host)
});

