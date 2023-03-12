const router = require("express").Router();
const { User } = require("../db/User");

router.get("/me", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(user);
  } catch (error) {
    console.log("This is an error from /me", error);
    next(error);
  }
});

router.get("/:email", async (req, res, next) => {
  const { email } = req.params;

  const user = await User.findOne({ where: { email } });
  console.log("\n\n\n\nuser ", user);
  res.send(user);
});

module.exports = router;
