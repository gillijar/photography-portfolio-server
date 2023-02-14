const express = require("express");
const categoryController = require("../controllers/categoryController");

const router = express.Router();

router
  .route("/")
  .get(categoryController.getCategories)
  .post(categoryController.createCategory);

router.route("/:category").get(categoryController.getCategory);

module.exports = router;
