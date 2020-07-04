const mongoose = require("mongoose")
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name: String,
    kcal: Number,
    ingredient: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }]
}, {
    timestamps: true
})

const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe