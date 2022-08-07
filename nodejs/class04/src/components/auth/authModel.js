const mongoose = require("mongoose");
const { Schema } = mongoose;

const authSchema = new Schema({
  email: String,
  age: String,
  name: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
});
const AuthModel = mongoose.model("users", authSchema);
module.exports = AuthModel;
