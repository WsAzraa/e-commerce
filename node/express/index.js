// 引入 express
const express =require('express')
const fs = require('fs')
const bodyParser =require('body-parser')
const app = express()
app.use(express.static('../../shop'))
app.use(bodyParser.urlencoded())
app.get('/getdata',function(req,res){
    const myData = fs.readFileSync('./index.json','utf8')
    res.send(myData)
})
app.post('/',function(req,res){
    
})
// 监听
app.listen(3000,'127.0.0.1',function(err){
    if(err){
        console.log(err)
        return
    }
    console.log('OK!')
})