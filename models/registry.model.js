const mongoose = require("mongoose")
const Schema = mongoose.Schema

const registrySchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    date: Date,
    name: String,
    kcal: Number,
    meals: [{ type: Schema.Types.ObjectId, ref: 'Meal' }],
    amount_gr: Number
}, {
    timestamps: true
})

const Registry = mongoose.model("Registry", registrySchema)

module.exports = Registry

