// 引入express
const express=require("express");
// 引入线程池
const pool=require("../pool.js");
// 创建路由器对象
const router=express.Router();
// 添加路由

// 1.用户登录
router.get("/v1/login",(req,res)=>{
  let $uname=req.query.uname;
  let $upwd=req.query.upwd;
  let sql="select uid,uname,upwd,email,phone,photo,sex from km_user where uname=? and upwd=?";
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if (err) throw err;
    if(result.length>0){
      res.send(result);
    }else{
      res.send("0");
    }
  });
});

// 2.用户注册
router.post("/v1/register",(req,res)=>{
  let obj=req.body;
  console.log(req.body);
  let sql="insert into km_user set ?";
  pool.query(sql,[obj],(err,result)=>{
    if(err) throw err;
    console.log(result);
  })
})
// 2.1查询用户名是否相同
router.get("/v1/uname",(req,res)=>{
  let $uname=req.query.uname;
  console.log(req.query);
  let sql="select uname from km_user where uname=?";
  pool.query(sql,[$uname],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send("1")
    }else{
      res.send("0")
    }
    
  })
})



// 导出路由
module.exports=router;
