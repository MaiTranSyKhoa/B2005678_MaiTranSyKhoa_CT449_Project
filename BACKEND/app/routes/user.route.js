const express = require("express");
const users = require("../controllers/user.controller");

const router = express.Router();

router.route("/")
    .get(users.findALL)
    .post(users.create);

  

router.route("/login")
    .post(users.login);
router.route("/logout")
    .get(users.logout);

router.route("/:id")
    .get(users.findById);

    
router.route("/:id")
    .put(users.update);  

module.exports = router;
