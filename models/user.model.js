const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const profileSchema = new Schema({
//     name: String,
//     picture: { type: Schema.Types.ObjectId, ref: 'Picture' },
//     sex: {
//         type: String,
//         enum: ['male', 'female']
//     },
//     idealweight: Number
// })

// const Profile = mongoose.model("Profile", profileSchema)

// module.exports = Profile

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const pictureSchema = new Schema({
//     name: String,
//     path: String,
//     originalName: String
// }, {
//     timestamps: true
// })

// const Picture = mongoose.model("Picture", pictureSchema)
// module.exports = Picture

// const mongoose = require("mongoose")
// const Schema = mongoose.Schema

// const weightSchema = new Schema({
//     weight: Number
// }, {
//     timestamps: true
// })

// const Weight = mongoose.model("Weight", weightSchema)

// module.exports = Weight