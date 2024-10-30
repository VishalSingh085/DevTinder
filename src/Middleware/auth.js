const AuthData = (req, res, next) => {
    console.log("Checking authorized admin...");

    const token = "xyz";
    const expectedToken = "xyz"; 
   
    // Simple authorization check
    const isAuthorizedAdmin = token === expectedToken;
    if (!isAuthorizedAdmin) {
        return res.status(401).send("Unauthorized admin!!");
    } else {
        next(); // Proceed to the next middleware or route handler
    }
};

const AuthUser = (req,res,next)=>{
    console.log("User auth is checked !!");
    
    let tokens = "yyz";
      let expectedTokens = "yyz";
      const isAuthorizedUser = tokens === expectedTokens;
      if(!isAuthorizedUser){
        return res.status(401).send("Unautherized user")
      }else{
        next();
      }
}
   


module.exports = {AuthData , AuthUser}; 
