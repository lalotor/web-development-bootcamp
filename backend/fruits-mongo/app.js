const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 4,
  review: "Coconut are not great"
});

// fruit.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "The best fruit!"
});

const orange = new Fruit({
  name: "Orange",
  rating: 4,
  review: "Too sour for me"
});

const banana = new Fruit({
  name: "Banana",
  rating: 3,
  review: "Weird texture"
});

// Fruit.insertMany([kiwi, orange, banana]).then(function() {
//   console.log("Successfully saved all the fruits to fruitsDB");
// }).catch(function(err) {
//   console.log(err);
// });

// Fruit.find({rating: {$gt: 5}}).then(function (fruits) {

Fruit.find().then(function (fruits) {
  fruits.forEach(fruit => {
    console.log(fruit.name);
  });

  // mongoose.connection.close();
}).catch(function (err) {
  console.log(err);
});

const res = Fruit.updateOne({ name: "Banana" }, { rating: 9, review: "Close to perfection!" }).then(function () {
  console.log("Successfully updated the fruit");
}).catch(function (err) {
  console.log(err);
});

const count = Fruit.deleteOne({ name: "Kiwi" }).then(function () {
  console.log("Successfully deleted the fruit");
}).catch(function (err) {
  console.log(err);
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Valerie",
  age: 7
});

// person.save();

const mango = new Fruit({
  name: "Mango",
  rating: 8,
  review: "Delicious fruit"
});

mango.save();

const res2 = Person.updateOne({ name: "Valerie" }, { favoriteFruit: mango }).then(function () {
  console.log("Successfully updated the person");
}).catch(function (err) {
  console.log(err);
});

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit"
});

// pineapple.save();

const person2 = new Person({
  name: "Toti",
  age: 15,
  favoriteFruit: pineapple
});

// person2.save();
