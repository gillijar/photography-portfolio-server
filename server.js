const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
mongoose.set("strictQuery", false);

const app = require("./app");

const DB = process.env.DATABASE.replace("<password>", process.env.DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
