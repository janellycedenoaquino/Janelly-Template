const router = require("express").Router();
const { User } = require("../db/User");

router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (error) {
    console.log("This an error from /login", error);
    next(error);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
    });

    const token = await User.authenticate({ email, password });
    res.send({ token });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      console.log("This an error from /signup", error);
      next(error);
    }
  }
});

router.get("/me", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(user);
  } catch (error) {
    console.log("This is an error from /me", error);
    next(error);
  }
});

module.exports = router;
