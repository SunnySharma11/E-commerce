const User = require("../models/UserSchema");
const bcrypt = require("bcryptjs");

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const isExist = await User.findOne({ email });
    if (isExist) {
      console.log("already exist email");
      return res.status(400).json({ extraDetails: "email already exist" });
    }

    const newUser = await User.create({ username, email, password });

    if (newUser) {
      console.log("register done");
      res.json({
        message: "registeration successful",
      });
    }
  } catch (error) {
    console.log("error during register jjj");
  }
};


const login = async (req, res, next) => {
  
    const { email, password } = req.body;

    const isUser = await User.findOne({ email });
    if (!isUser) {
      return next({ extraDetails: 'No email found' });
    }

    const isTruePassword = await bcrypt.compare(password, isUser.password);
    if (!isTruePassword) {
      return next({ extraDetails: 'Password does not match' });
    }

    res.json({
      message: 'Login successful',
      token: await isUser.createToken(),
      userId: isUser._id.toString(),
    });

};

module.exports = { register ,login };
