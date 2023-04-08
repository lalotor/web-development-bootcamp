const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todoListDB", { useNewUrlParser: true });

const itemSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({ name: "Study Front-End" });
const item2 = new Item({ name: "Read Tech Book" });
const item3 = new Item({ name: "Play Videogames" });
const defaultItems = [item1, item2, item3];

const listSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema]
});

const List = mongoose.model("List", listSchema);

function insertDefaultItems() {
  Item.insertMany(defaultItems).then(function () {
    console.log("Successfully saved all the items to todoListDB");
  }).catch(function (err) {
    console.log(err);
  });
}

function findAllItems() {
  return Item.find({});
}

function deleteById(itemId) {
  Item.findByIdAndDelete(itemId).then(function () {
    console.log("Successfully deleted the item " + itemId);
  }).catch(function (err) {
    console.log(err);
  });
}

function createNewList(name) {
  const list = new List({
    name: name,
    items: defaultItems
  });

  list.save();
}

function findListByName(name) {
  return List.findOne({ name: name });
}

function removeItemFromList(listName, itemId) {
  List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: itemId } } }).then(function () {
    console.log("Successfully removed item " + itemId + " from list " + listName);
  }).catch(function (err) {
    console.log(err);
  });
}

app.get("/", async (req, res) => {
  const todayName = date.getDate();
  const foundItems = await findAllItems();
  if (foundItems.length === 0) {
    insertDefaultItems();
    res.redirect("/");
  } else {
    res.render("list", { listTitle: todayName, items: foundItems });
  }
});

app.post("/", async (req, res) => {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const todayName = date.getDate();
  
  const newItem = new Item({
    name: itemName
  });

  if (listName === todayName) {
    newItem.save();
    res.redirect("/");
  } else {
    const foundList = await findListByName(listName);
    if (foundList) {
      foundList.items.push(newItem);
      foundList.save();
      res.redirect("/" + listName);
    }
  }
});

app.post("/delete", async (req, res) => {
  const itemId = req.body.deleteCheckBox;
  const listName = req.body.list;
  const todayName = date.getDate();

  if (listName === todayName) {
    deleteById(itemId);
    res.redirect("/");
  } else {
    removeItemFromList(listName, itemId);
    res.redirect("/" + listName);
  }
});

app.get("/:listName", async (req, res) => {
  const listName = _.capitalize(req.params.listName);
  const foundList = await findListByName(listName);
  if (!foundList) {
    createNewList(listName);

    res.redirect("/" + req.params.listName);
  } else {
    res.render("list", { listTitle: foundList.name, items: foundList.items });
  }
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.")
});
