const router = require('express').Router();
const getProfile = require('../controllers/profile');
const {fetchData}= require('../controllers/utils');

router.get("/:userName",fetchData,getProfile);
module.exports = router;