const router = require("express").Router();
const auth = require("./auth");
const user = require("./user");
const emailRecovery = require("./emailRecovery");

//all api routes will meet here to keep page concise and uniform
router.use("/auth", auth);
router.use("/users", user);
router.use("/emailRecovery", emailRecovery);

router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
