const express = require("express");
const app = express();
app.use("/test",(req,res)=>{
   res.send("test code request is run");
})
// app.use("/",(req,res)=>{
//     res.send(" request is run");
    
//  })
app.listen(3000,()=>{
    console.log("Server is running in 3000 ports");
})