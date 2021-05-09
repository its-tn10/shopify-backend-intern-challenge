const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');

router.post('/login', userCtrl.login);
router.post('/create', userCtrl.register);
router.get('/logout', userCtrl.logout);
router.get('/images', userCtrl.images);

module.exports = router;