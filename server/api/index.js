const router = require("express").Router();
const user = require("./users");
// const otherExample = require("./otherExample");

//all api routes will meet here to keep page concise and uniform
router.use("/users", user);
// router.use("/otherExample", otherExample);

router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
