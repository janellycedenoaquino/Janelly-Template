require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const { db } = require("./db/index");
const path = require("path");
const PORT = process.env.PORT || 1995;

//middleware
app.use(cors());
app.use(morgan("dev")); //status of page
app.use(express.static(path.join(__dirname, "..", "./public"))); //serve static files
app.use(express.json()); //body-parsing recognizes requests in json format
app.use(express.urlencoded({ extended: true })); //body-parsing recognizes the incoming requests objects as strings or arrays
//routes
app.use("/api", require("./api"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "./public/index.html"));
});

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

//running app
db.sync().then(() => {
  console.log("connected to db");
  app.listen(PORT, () => {
    console.log(`listening on port: http://localhost:${PORT}/`);
  });
});

db.authenticate().then(() => {
  console.log("successfully connected to the db");
});
