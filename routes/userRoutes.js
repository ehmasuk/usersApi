const { getUsers,postUsers } = require("../controllers/userControllers");

const router = require("express").Router();

router.get("/", getUsers);


router.post("/", postUsers);

module.exports = router;
