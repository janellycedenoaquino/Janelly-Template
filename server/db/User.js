const { DataTypes } = require("sequelize");
const { db } = require("./index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 5;

const User = db.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { User };

User.prototype.correctPassword = async function (candidatePwd, hash) {
  const correctPassword = await bcrypt.compare(candidatePwd, hash);
  return correctPassword;
};

User.prototype.generateToken = async function (id) {
  const token = await jwt.sign({ id }, process.env.SECRET_TOKEN);
  return token;
};

User.authenticate = async function ({ email, password }) {
  const user = await this.findOne({ where: { email } });
  const hash = user.dataValues.password;
  const id = user.dataValues.id;

  if (!user || !(await user.correctPassword(password, hash))) {
    const error = Error("Incorrect email/password");
    error.status = 401;
    throw error;
  }
  return user.generateToken(id);
};

User.findByToken = async function (token) {
  try {
    const userValue = await jwt.verify(token, process.env.SECRET_TOKEN);
    const user = await User.findByPk(userValue.id);
    if (!user) {
      throw "nooo";
    }

    return user;
  } catch (ex) {
    const error = Error("bad token");
    error.status = 401;
    throw error;
  }
};

const hashPassword = async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));
