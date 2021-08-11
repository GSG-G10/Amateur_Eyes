const path = require('path');
const auth = (req,res,next)=>{
    res.sendFile(path.join(__dirname,"..",'views','signIn.html'));
}
module.exports = auth;