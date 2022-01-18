const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("./user.model");

exports.addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);
    res.status(200).send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

exports.logIn = async (req, res) => {
  try {
    if (req.user) {
      res.status(200).send({ user: req.user });
    } else {
      const user = await User.findOne({ username: req.body.username });
      if (await bcrypt.compare(req.body.password, user.password)) {
        const token = jwt.sign({ _id: user._id }, process.env.SECRET);
        res.status(200).send({ user, token });
      } else {
        throw new Error("Password error");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};