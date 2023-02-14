const express = require("express");
const imageController = require("../controllers/imageController");

const router = express.Router();

router
  .route("/")
  .get(imageController.getImages)
  .post(imageController.createImage);

router.route("/:id").get(imageController.getImage);

module.exports = router;
