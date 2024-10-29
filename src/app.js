const express = require("express");
const app = express();

//this will only Get call to /user
//ab?c- it work ac and abc'  ab+c = abbbbc abddc abc
//rputing diff regex and  *fly$ = means last word same
app.get('/user/:userId/:password/:course',(req, res)=>{
    // console.log(req.query);
    console.log(req.params);
   res.send({firstName:"Vivek",lastName:"thakur"})
})
// app.post(/.*fly$/ ,(req,res)=>{
// res.send("data successfully saved to database")
// })
app.delete("/user",(req,res)=>{
   res.send("deleted successsfully");
})

//this will match all http method api calls to /test
app.use("/test/2",(req,res)=>{
    res.send(" test 2");
 })

app.listen(3000,()=>{
    console.log("Server is running in 3000 ports");
})