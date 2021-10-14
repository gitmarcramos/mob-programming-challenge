const express = require("express");
const app = express();

require("dotenv").config();

require("./config/mongodb.js");
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));

const users = [
  {
    name: "Marc",
    email: "marcomarc@marc.marc",
    favoriteLanguage: "php",
  },

  {
    name: "Joey",
    email: "joey@gmail.com",
    favoriteLanguage: "python",
  },

  {
    name: "Priscilla Gasztowtt",
    email: "priscilla@gasztow.tt",
    favoriteLanguage: "js ofc",
  },
  {
    name: "Pauline",
    email: "pauline@pauline.pauline",
    favoriteLanguage: "portuguese",
  },
];

const images = [
  "/img/dolphin.jpg",
  "/img/hacker.jpg",
  "/img/happyppl.jpg",
  "/img/penguin.jpg",
];

// Route for home sweet home :)
app.get(["/", "home"], (req, res, next) => {
  res.render("home.hbs", {
    images,
  });
});

// Route for the squad
app.get("/my-dev-squad", (req, res, next) => {
  res.render("my-dev-squad.hbs", {
    users,
  });
});

// route to add happy people
app.get("/add-new-ironhacker", (req, res, next) => {
  res.render("add-new-ironhacker.hbs", {
      
  });
});

// Kickstart
app.listen(process.env.PORT, () => {
  console.log("App running on port: http://localhost:" + process.env.PORT);
});
