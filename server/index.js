const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const authController = require("./controllers/authController");
const userController = require("./controllers/userController");
const propertyController = require("./controllers/propertyController");
const uploadController = require("./controllers/uploadController");

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB has been connected successfully on " + process.env.MONGO_URL);
}

main().catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authController);
app.use("/user", userController);
app.use("/property", propertyController);
app.use("/upload", uploadController);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log("Server has been started successfully on localhost:" + port)
);
