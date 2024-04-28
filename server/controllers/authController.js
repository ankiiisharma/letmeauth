const { error } = require("console");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const { comparePassword, hashPassword } = require("../helpers/auth");

const test = (req, res) => {
  res.json("test is working...");
};

//REGISTER ENDPOINT

const registerUser = async (req, res) => {
  // res.json("registering.. user");
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({
        error: "Name is required!",
      });
    }

    if (!password || password.length < 8) {
      return res.json({
        error: "Password is required and should be at least 8 characters long!",
      });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "oops!,Email already exists!",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log("error " + error);
  }
};

// ??LOGIN ENDPOINT?

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "no user find!",
      });
    }

    const match = await comparePassword(password, user.password);

    if (match) {
      // res.json("passwords matched!!");
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "password do not match!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//get profile

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};
