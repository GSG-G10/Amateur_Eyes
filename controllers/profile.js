const path = require('path');
const getProfile = (req,res,next)=>{
    //1-handle your profile 
    // get data which pass from middleware
    res.json(req.userData)
    // res.sendFile(path.join(__dirname,"..",'views','profile.html'));
}
module.exports = getProfile;