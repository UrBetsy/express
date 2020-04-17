var express = require('express');
var http = require('http');

var app = express();
console.log('这里是server')

// 应用程序实例对象的get方法：接受客户端提供的GET请求并返回服务端响应结果
// 在不是用中间件的时候，传两个参数 get(path,callback)
// app.get('/index.html', (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })
//     res.write('<head><meta charset="utf-8"></heade>')
//     res.end('你好\n')
// })
// 路由中可以使用":" + 参数名 的方式来制定一个参数,(下面的例子请求地址必须有两个参数)
// app.get('/index.html/:id/:name', (req, res) => {
//     var str = '';
//     for (key in req.params) {
//         if (str != '') str += "<br/>";
//         str += '参数名:' + key;
//         str += String.fromCharCode(9) + '参数值: ' + req.params[key];
//     }
//     res.send(str)
// })
// 正则表达式的路由，下面例子可以有0，1，2个参数
// app.get('/index.html/:id?/:name?', (req, res) => {
//     var str = '';
//     for (key in req.params) {
//         if (str != '') str += "<br/>";
//         str += '参数名:' + key;
//         str += String.fromCharCode(9) + '参数值: ' + req.params[key];
//     }
//     res.send(str)
// })
// 正则表达式的路由
// app.get(/\/(\d+)/, (req, res) => {
//     var str = '正则表达式';
//     res.send(str)
// })

// 使用中间件的get方法
// express框架中，可以使用多个应用程序实例对象get方法并且这些get方法中使用相同的路由。
// 可以在一个get方法中使用next()调用骗一个使用相同路由的方法,必须在该方法所使用的的回调函数中使用next
app.get('/index.html/:id(\\d+)', (req, res, next) => {
    if (req.params.id > 10){
        next();
    } else {
        res.send('id参数必须大于10')
    }   
})
app.get('/index.html/:id(\\d+)', (req, res) => {
    res.send('你好')
})

// post的使用方法
// app.post(path,call)
// 在不是用中间件的时候，和get方法的参数一样

app.listen(1337, "127.0.0.1")
