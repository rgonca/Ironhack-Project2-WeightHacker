const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    sex: {
        type: String,
        enum: ['female', 'male']
    },
    avatar: String,
    initialWeight: Number,
    targetWeight: Number,
    historyWeight: [{ type: Number }, {
        timestamps: true
    }]
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User
