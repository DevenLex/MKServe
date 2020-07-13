// 加载express模块
const express=require("express");
//引入路由模块
const Router=require("./router/api.js");
// 跨域
const cors=require("cors");
// 引入解析字符串中间件
const bodyParser=require("body-parser");

// 创建服务器
const app=express();

// 使用cors模块
app.use(cors({
      origin: ['http://127.0.0.1:8080', 'http://localhost:8080']
  }));
  app.use(bodyParser.urlencoded({
      extended:false
  }))
// 设置端口
app.listen(6600);
// 应用body-parser,将post请求数据解析为对象
app.use(bodyParser.urlencoded({
  extended:false
}))

// 挂载路由,添加前缀
app.use("/api",Router);
