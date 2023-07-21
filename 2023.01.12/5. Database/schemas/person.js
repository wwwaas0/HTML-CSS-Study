const mongoose = require("mongoose");

const { Schema } = mongoose;
const personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
});

const Person = mongoose.model("Persons", personSchema); // 스키마를 사용해서 모델 생성

module.exports = Person;
