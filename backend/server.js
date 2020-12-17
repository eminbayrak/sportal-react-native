const express = require('express');
const app = express();
const config = require('./config/config');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 5000;

// Import routes
const authRoute = require('./routes/index');

//MongoDB connection setup
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, config.MONGODB_CONFIG);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection established!");
});


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// Parse application/json
app.use(bodyParser.json());

// Middleware routes
app.use('/api', authRoute);
app.use(cors());
app.use(express.json());
app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
});
