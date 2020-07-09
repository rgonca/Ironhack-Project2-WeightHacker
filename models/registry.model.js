const mongoose = require("mongoose")
const Schema = mongoose.Schema

const registrySchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    date: {
        type: String,
        required: true
    },
    meals: [{
        image: String,
        name: {
            type: String,
            default: 'meal'
        },
        amount_gr: Number,
        kcal: Number
    }]
}, {
    timestamps: true
})

const Registry = mongoose.model("Registry", registrySchema)

module.exports = Registry