var express = require('express');
// var path = require('path');
var app = express();
// const index = require('./router/index')
const datas = require('./router/data')
app.use(express.static('dist'))
// app.use('/',index)
app.use('/',datas)


app.listen(8080, () => {
 
})





