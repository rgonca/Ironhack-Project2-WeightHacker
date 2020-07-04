const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ingredientSchema = new Schema({
    name: String,
    kcal: Number
}, {
    timestamps: true
})

const Ingredient = mongoose.model("Ingredient", ingredientSchema)

module.exports = Ingredient