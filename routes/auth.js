const router = require("express").Router();
const { userLogIn } = require("../Controllers/signupIN");

router.post("/login", userLogIn);

module.exports = router;
