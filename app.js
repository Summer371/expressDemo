const express=require("express");
const app=express();
/*const bodyParser=require("body-parser");
app.use(bodyParser.json());*/
app.use(express.static(__dirname+"/html"));

app.all("*",function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","*");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.sendStatus(200);  //让options尝试请求快速结束
    else {
        next();
    }
});

app.listen(3000,()=>{
    console.log("server is start success")
})