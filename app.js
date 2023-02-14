const express = require("express");
const cors = require("cors");
const categoryRouter = require("./routes/categoryRouter");
const imageRouter = require("./routes/imageRouter");
const storeRouter = require("./routes/storeRouter");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/images", imageRouter);
app.use("/api/v1/store", storeRouter);

module.exports = app;
