const User = require("../models/UserSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const SECRET_KEY = process.env.JWT_SECRET_KEY;

const Register = async(req,res) =>{
    try {
        const { name, email, password } = req.body;

        const isExist = await User.findOne({ email });
        if (isExist) {
            return res.json("User already exists");
        }

        const newUser = new User({ name, email, password });
        await newUser.save(); 

        const token = jwt.sign({ id: newUser._id }, SECRET_KEY, { expiresIn: "1h" });

        return res.json({ message: "User registered successfully", token });

    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal server error");
    }

}


const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json("Invalid email or password");
        }

        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json("Invalid email or password");
        }

        const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });

        return res.json({ message: "Login successful", token });

    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal server error");
    }
};

module.exports = { Register , Login }