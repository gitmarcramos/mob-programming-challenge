const express = require('express')
const app = express();

require('dotenv').config();

require('./config/mongodb.js');
const hbs = require('hbs');

app.use(express.static(__dirname + './public'))

const users = [
    {
        name: "Marc",
        email: "marcomarc@marc.marc",
        favoriteLanguage: "php"
    },

    {
        name: "Joey",
        email: "joey@gmail.com",
        favoriteLanguage: "python"
    },

    {
        name: "Priscilla Gasztowtt",
        email: "priscilla@gasztow.tt",
        favoriteLanguage: "js ofc"
    }
];

const images = [
    "/img/dolphin.jpg",
    "/img/hacker.jpg",
    "/img/penguin.jpg"
]

app.listen(process.env.PORT);