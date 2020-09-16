const router = require("express").Router();
const loginController = require("../../../controllers/auth/loginController");
const logoutController = require("../../../controllers/auth/logoutController");


router.post("/login", loginController);
router.post("/logout", logoutController);

module.exports = router;