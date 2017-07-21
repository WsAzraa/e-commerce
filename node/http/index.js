var http = require('http')
// 用来处理rul
var url = require('url')
// 用来进行文件操作
var fs = require('fs')

// 创建服务
var server = http.createServer(function(request, response) {

    response.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });
    var obj = url.parse(request.url, true)
    // console.log(obj)
    // request  发送过来的数据
    console.log(request.url)
    if (obj.pathname === '/form.html') {
        var formHtml = fs.readFileSync('./form.html', 'utf8')
        response.end(formHtml)
        return
    }
    if (obj.pathname === '/show.html') {
        var showHtml = fs.readFileSync('../../show.html', 'utf8')
        response.end(showHtml)
        return
    }
    if (obj.pathname === '/login.html') {
        var loginHtml = fs.readFileSync('../../login.html', 'utf8')
        response.end(loginHtml)  
        return
    }
    if (obj.pathname === '/index.html') {
        var indexHtml = fs.readFileSync('../../index.html', 'utf8')
        response.end(indexHtml)
        return
    }

    response.writeHead(404, {
        "Content-Type": "text/html;charset=utf-8"
    })
    response.end('页面不存在 ')


    // var result = request.url.startsWith('/form')
    //     if (result) {
    //         if (obj.query.userage>121) {
    //         response.end('年龄过大')
    //         }else{
    //         response.end('提交成功')
    //         }
    //     }
})
// 监听
// 端口 ， ip
server.listen(3000, '127.0.0.1', function(err) {
    console.log('成功运行 127.0.0.1：3000')
    if (err) {
        console.log(err)
    }
})