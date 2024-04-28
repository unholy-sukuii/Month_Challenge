const { registerUser } = require("../controller/userController");


const router = require("express").Router();
router.route('/').post(registerUser)


module.exports = router