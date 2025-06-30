const express = require("express");
const router = express.Router();
const blagueController = require("../controllers/blagueController");

router.post("/", blagueController.addBlague);
router.get("/", blagueController.getAllBlagues);
router.get("/random", blagueController.getRandomBlague);
router.get("/:id", blagueController.getBlagueById);

module.exports = router;
