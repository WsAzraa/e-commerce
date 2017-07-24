const express =require('express')
const home = new express.Router()
const fs = require('fs')
// const bodyParser =require('body-parser')
const app = express()
// app.use(bodyParser.urlencoded())
home.get('/getdata',function(req,res){
    const myData = fs.readFileSync('./index.json','utf8')
    res.send(myData)
})
// app.post('/',function(req,res){
    
// })
// 暴露出去
module.exports=home;
})