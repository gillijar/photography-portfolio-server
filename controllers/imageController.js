const Image = require("../models/imageModel");

exports.getImages = async (req, res) => {
  const images = await Image.find();

  res.status(200).json({
    status: "success",
    lenght: images.length,
    data: {
      images,
    },
  });
};

exports.createImage = async (req, res) => {
  const image = await Image.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      data: {
        image,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findById(id);

    res.status(200).json({
      status: "success",
      data: {
        image,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
