const User = require("../model/userModel");
const bcrypt = require("bcryptjs");

exports.create = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;
    if (!(fname, lname, email, password)) {
      return res.status(404).json({
        message: "user daata not found",
      });
    }
    bcrypt.genSalt(10, async function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const userData = await User.create({
          fname: fname,
          lname: lname,
          email: email,
          password: hash,
        });

        res.status(200).json({
          success: true,
          message: "data saved in database",
          userData,
        });
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(404).json({
        msg: "User data not found",
      });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getuser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        msg: "User data not found",
      });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const update = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!update) {
      return res.status(404).json({
        msg: "User data not found",
      });
    }
    res.status(200).json({
      msg: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if (!deleteUser) {
      return res.status(404).json({
        msg: "User data not found",
      });
    }
    res.status(200).json({
      msg: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
