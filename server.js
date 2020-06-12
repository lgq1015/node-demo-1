var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)
  

   if(path === '/'){
     response.statusCode = 200
     response.setHeader('Content-Type', 'text/html;charset=utf-8')
     response.write(`
     <!DOCTYPE html>
<html>

<head>  
  <meta charset="utf-8">
  <title>JS Bin</title>
  <link rel="stylesheet" href="/x">
</head>

<body>
  <header class="clearfix">
    <div class="logo">
      <img src="http://js.jirengu.com/images/dave.min.svg" alt="">
    </div>
    <ul class="clearfix nav">
      <li>类型</li>
      <li>主播</li>
      <li>关注</li>
      <li>房间类型</li>
    </ul>
  </header>

  <div class="content clearfix">
    <aside>边栏</aside>
    <main></main>
    <div class="ad"></div>
  </div>

  <div class="imageList ">
    <div class="x clearfix">
      <div class="image"></div>
      <div class="image"></div>
      <div class="image"></div>
      <div class="image"></div>
      <div class="image"></div>
      <div class="image"></div>
      <div class="image"></div>
      <div class="image"></div>
    </div>

  </div>
</body>

</html>
       `)
     response.end()
   } else if(path === '/x'){
     response.statusCode = 200
     response.setHeader('Content-Type', 'text/css;charset=utf-8')
     response.write(`* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ul,
    ol {
      list-style: none;
    }
    img {
      max-width: 100%;
    }
    header {
      display: block;
    }
    .clearfix:after {
      content: '';
      display: block;
      clear: both;
    }
    ul {
      float: right;
      display: inline-block;
    }
    ul>li {
      float: left;
      padding: 5px;
    }
    .logo {
      float: left;
    }
    .logo>img {
      vertical-align: top;
      height: 33px;
    }
    header {
      background: grey;
      color: white;
    }
    .nav {
      float: right
    }
    .content {
      outline: 1px solid red;
      width: 800px;
      margin: 0 auto;
      margin-left: auto;
      margin-right: auto;
    }
    .content>aside {
      border: 1px solid red;
      width: 190px;
      height: 300px;
      float: left;
    }
    .content>main {
      border: 1px solid black;
      height: 300px;
      width: 500px;
      float: left;
    }
    .content>.ad {
      outline: 1px solid purple;
      height: 300px;
      width: 110px;
      float: left;
      background: #333;
    }
    .imageList {
      width: 800px;
      margin-right: auto;
      margin-left: auto;
      outline: 1px solid red;
      margin-top:10px;
    }
    .imageList>.x>.image {
      width: 191px;
      height: 191px;
      background: #666;
      outline: 1px solid green;
      float: left;
      margin-right:12px;
      margin-bottom:10px;
      
    }
    .imageList > .x{
      margin-right: -12px;
    }`)
     response.end()
   } else {
     response.statusCode = 404
     response.setHeader('Content-Type', 'text/html;charset=utf-8')
     response.write(`你输入的路径不存在对应的内容`)
     response.end()
   }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)

