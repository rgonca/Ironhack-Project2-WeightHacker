const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    name: String,
    picture: { type: Schema.Types.ObjectId, ref: 'Picture' },
    sex: {
        type: String,
        enum: ['male', 'female']
    },
    idealweight: Number
})

const Profile = mongoose.model("Profile", profileSchema)

module.exports = Profile