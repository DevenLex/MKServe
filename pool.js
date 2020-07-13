// 引入mysql模块
const mysql=require("mysql");
// 创建线程池
const pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:"km",
});
module.exports=pool;
