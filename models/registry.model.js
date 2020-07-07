const mongoose = require("mongoose")
const Schema = mongoose.Schema

const registrySchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    date: Date,
    meal: [{ type: Schema.Types.ObjectId, ref: 'Meal' }]
}, {
    timestamps: true
})

const Registry = mongoose.model("Registry", registrySchema)

module.exports = Registry

