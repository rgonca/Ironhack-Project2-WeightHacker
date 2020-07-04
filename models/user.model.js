const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    sex: String,
    weight: Number,
    height: Number
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User