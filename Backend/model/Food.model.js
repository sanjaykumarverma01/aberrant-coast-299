const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  name: String,
  energy: String,
  protein: String,
  fat: String,
amount:String,
  carbohydrate: String,
  date:String
 
});

const FoodModel = mongoose.model("food", foodSchema);

module.exports = FoodModel;
