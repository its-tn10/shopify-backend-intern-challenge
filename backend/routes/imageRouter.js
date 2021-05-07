const router = require('express').Router();
const imageCtrl = require('../controllers/imageCtrl');

router.put('/upload', imageCtrl.upload);

module.exports = router;