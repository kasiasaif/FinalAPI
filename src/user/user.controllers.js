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
exports.findOne = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server logs" });
  }
};
exports.findAll = async (req, res) => {
  try{
      const result =  await User.find();
      res.send(result);

  }catch(error){
      console.log(error)
      res
      .status(500)
      .send({message: 'Something went wrong, check server logs'});
  }
}

exports.updateEmail = async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { username: req.body.username },
      { $set: { email: req.body.email } },
      { new: true }
    );
    res.status(200).send({ message: "Success", updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server logs" });
  }
};
exports.updatePassword = async(req, res)=>{
  try{
      const result = await User.updateOne(
        {username: req.body.username}, 
        {$set:{password: req.body.password}},
        { new: true }
      );
      res.json(result)
      console.log(result)
      res.status(200).send({message: result});

  }catch(error){
      console.log(error)
      res
      .status(418)
      .send({message: "Something went wrong, check server logs"}) ; 
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ username: req.body.username });
    res.status(200).send({ message: "Success", deletedUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server logs" });
  }
};