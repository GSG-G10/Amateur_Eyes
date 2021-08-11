const router = require('express').Router();
const SignInCntroll = require('../controllers/auth');
// as index file for auth route
router.get("/",SignInCntroll);
//post info
module.exports = router;
