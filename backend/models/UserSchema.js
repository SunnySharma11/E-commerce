const mongoose = require("mongoose"); // schema and model both new**
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  //register and login both on same schema
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    // you can directly add adefault thing,but you need to delete whole old things in mongo and then again create datas
    type: String,
    default: false,
  },
});

UserSchema.pre('save', async function (){        //this will play the game here
  const user = this;              // by reference going things

  const saltRound = await bcrypt.genSalt(10)
  const hashedPass = await bcrypt.hash(user.password,saltRound)

  user.password = hashedPass    // refernce going
})


UserSchema.methods.createToken = async function () {        //give only necessary data
  return await jwt.sign({
      username:this.username,
      email:this.email,
      userId:this._id.toString()
  },
  process.env.JWT_SECRET_KEY,
  {expiresIn:'2d'}
  )
}

module.exports = new mongoose.model("User", UserSchema);