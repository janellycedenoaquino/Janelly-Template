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
app.use(morgan("dev")); 
app.use(express.static(path.join(__dirname, "..", "./public"))); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


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
const init = async () => {
  try {
    await db.sync();
    app.listen(PORT, () =>
      console.log(`Mixing it up on port http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

init();
