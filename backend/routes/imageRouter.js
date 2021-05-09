const router = require('express').Router();
const imageCtrl = require('../controllers/imageCtrl');

router.post('/upload', imageCtrl.uploadImage);
router.post('/delete', imageCtrl.deleteImage);
router.get('/view', imageCtrl.viewImage);
router.get('/gallery', imageCtrl.viewGallery);

module.exports = router;