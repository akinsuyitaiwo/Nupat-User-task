// import {schema, model} from "mongoose";
import pkg from "mongoose";
const {Schema, model} = pkg;

const UserSchema = new Schema({
  name: {type: String},
  password: {type: String},
  gender: {type: String, enum: ["male", "female"]}
});

export default model("User", UserSchema);
