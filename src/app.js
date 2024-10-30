const express = require("express");
// const { AuthData, AuthUser } = require("./Middleware/auth");
const app = express();
  
app.get("/getUserData",(req,res)=>{
    try{
        throw new Error("ghjkmm")
        res.send("User data sent !!")
    }catch(err){
        res.status(500).send("Some error occured contact to team..!!");
    }
  
})
app.use("/",(err,req,res,next)=>{
    if(err){
    res.status(500).send("Something went wrong !!");
    }
})





app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
