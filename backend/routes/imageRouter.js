const router = require('express').Router();
const imageCtrl = require('../controllers/imageCtrl');

router.post('/upload', imageCtrl.uploadImage);
router.delete('/delete', imageCtrl.deleteImage);
router.get('/view', imageCtrl.viewImage);

module.exports = router;