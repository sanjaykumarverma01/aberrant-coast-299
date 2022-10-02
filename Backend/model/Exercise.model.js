const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema({
  name: String,
  calories_per_hour: String,
  duration_minutes: String,
  effortlevel:String,
  total_calories: String,
  diarygroup:String,
  timeofday:String
});

const ExerciseModel = mongoose.model("exercise", exerciseSchema);

module.exports = ExerciseModel;
