const express = require("express");
const classController = require("../Controllers/Class");

const router = express.Router();

router.get("/", classController.getClass);
router.put("/", classController.updateClass);

module.exports = router;
