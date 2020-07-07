const mongoose = require("mongoose")
const Schema = mongoose.Schema

const mealSchema = new Schema({
    image: String,
    name: String,
    kcal: Number,
    amount_gr: Number
}, {
    timestamps: true
})

const Meal = mongoose.model("Meal", mealSchema)

module.exports = Meal