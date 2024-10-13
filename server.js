const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// import noteRoutes
const noteRoutes = require('./routes/NoteRoutes.js');

// Replace my mongodb address.
const DB_URL = "mongodb+srv://wk020317:xtW0EQQJcvypqzA8@cluster0.jakp6.mongodb.net/comp3123_lab6?retryWrites=true&w=majority";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Register the routes
app.use('/api', noteRoutes);

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL)
.then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(8081, () => {
    console.log("Server is listening on port 3000");
});