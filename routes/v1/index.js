const router = require("express").Router();
const authRoutes = require("./auth/auth")

router.use("/auth", authRoutes);

// Export all routes 
module.exports = router;