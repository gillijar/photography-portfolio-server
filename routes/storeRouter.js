const express = require("express");
const storeController = require("../controllers/storeController");

const router = express.Router();

router
  .route("/")
  .get(storeController.getItems)
  .post(storeController.createItem);

router.route("/:id").get(storeController.getItem);

module.exports = router;
