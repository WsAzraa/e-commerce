const express = require('express');
// var path = require('path');
const app = express();
// const index = require('./router/index')
const datas = require('./router/data')
app.use(express.static('shop'))
// app.use('/',index)
app.use('/',datas)


app.listen(8080, () => {
 	console.log('Server running at http://127.0.0.1:8080/')
})





