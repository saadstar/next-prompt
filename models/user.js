import { Schema ,model,models} from "mongoose";

const UserSchema = new Schema({
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
});

const User =models.User || model("User", UserSchema);
export default User;
