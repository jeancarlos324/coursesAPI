const express = require("express");
const initModels = require("./models/initModels");
const db = require("./utils/dababase");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

db.authenticate()
  .then(() => console.log("It's Authenticate"))
  .catch((error) => console.log(error));

db.sync({ force: true })
  .then(() => console.log("db Sync"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (request, response) => {
  response.status(200).json({ message: "ok" });
});

app.listen(PORT, () => console.log("Server has running in port: " + PORT));
