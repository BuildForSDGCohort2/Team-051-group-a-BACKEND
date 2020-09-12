const router = require('express').Router();
const loginController = require('../../../controllers/auth/loginController');

router.post('/login', loginController);

module.exports = router;