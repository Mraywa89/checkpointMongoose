const mongoose = require("mongoose");   //IMPORT OF MONGOOSE

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: { type: [String] },
});

module.exports = mongoose.model("persons", personSchema);