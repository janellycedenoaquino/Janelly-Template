const router = require("express").Router();
const auth = require("./auth");

//all api routes will meet here to keep page concise and uniform
router.use("/auth", auth);

router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
