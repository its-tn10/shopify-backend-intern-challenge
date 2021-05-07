const router = require('express').Router();
const imageCtrl = require('../controllers/imageCtrl');

router.put('/upload', imageCtrl.uploadImage);
router.delete('/delete', imageCtrl.deleteImage);

module.exports = router;