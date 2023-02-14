const Store = require("../models/storeModel");

exports.getItems = async (req, res) => {
  try {
    const items = await Store.find();

    res.status(200).json({
      status: "success",
      data: {
        items,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createItem = async (req, res) => {
  try {
    const item = await Store.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        item,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Store.findById(id);

    res.status(200).json({
      status: "success",
      data: {
        item,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
