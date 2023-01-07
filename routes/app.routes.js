const linksController = require("../controllers/links.controller");
const express = require("express");
const router = express.Router();

router.post("/links", linksController.create);
router.get("/links", linksController.findAll);
router.get("/links/:id", linksController.findOne);
router.put("/links/:id", linksController.update);
router.delete("/links/:id", linksController.delete);

module.exports = router;