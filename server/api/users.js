const router = require("express").Router();

//all api routes will meet here to keep page concise and uniform
router.get("/", (req, res) => {
  res.send("made it to users a list of all users will be here");
});

router.post("/", (req, res) => {
  res.send("a user should be added using this route");
});

router.get("/:id", (req, res) => {
  res.send("a single user should be the response");
});

router.delete("/:id", (req, res) => {
  res.send("Will delete approriate user ");
});

module.exports = router;
