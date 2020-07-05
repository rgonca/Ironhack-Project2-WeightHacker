const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    picture: { type: Schema.Types.ObjectId, ref: 'Picture' },
    sex: {
        type: String,
        enum: ['male', 'female']
    },
    weightbudget: Number
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User