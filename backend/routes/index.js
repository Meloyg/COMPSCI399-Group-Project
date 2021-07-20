const express = require("express");
const { test } = require('../controller/index')
const router = express.Router();


router.route("/hello").post(test);



module.exports = router;