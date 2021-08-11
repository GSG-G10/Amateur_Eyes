const router = require('express').Router();
const getProfile = require('../controllers/profile');
router.get("/:userName",getProfile);
module.exports = router;