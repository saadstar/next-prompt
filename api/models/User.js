const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
     email: {
    type: String,
    unique: [true, "email Already Exist!"],
    required: [true, "email is required!"],
  },
  username: {
    type: String,
    required: [true, "username is required!"],
    },
    image: {
      type:String,
  }
  },
  { timestamps: true }
);


 module.exports = mongoose.model("User", UserSchema);