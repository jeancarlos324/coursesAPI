const express = require("express");
const initModels = require("./models/initModels");
const seed = require("./seeders/seed");
const db = require("./utils/dababase");
//Routes
const userRoutes = require("./routes/users.routes");
const coursesRoutes = require("./routes/courses.routes");
const videosRoutes = require("./routes/videos.routes");
const categoriesRoutes = require("./routes/categories.routes");

const morgan = require("morgan");

// const cors = require("cors");
const handleError = require("./middlewares/errors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
// app.use(cors());

const PORT = process.env.PORT;

db.authenticate()
  .then(() => console.log("It's Authenticate"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("db Sync"))
  .catch((error) => console.log(error));

initModels();
seed();
app.get("/", (request, response, next) => {
  response.status(200).json({ message: "ok" });
  next();
});

app.use("/api/v1/", userRoutes);
app.use("/api/v1/", coursesRoutes);
app.use("/api/v1/", videosRoutes);
app.use("/api/v1/", categoriesRoutes);

app.use(handleError);
app.listen(PORT, () => console.log("Server has running in port: " + PORT));
