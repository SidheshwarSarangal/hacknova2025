const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { cloudinaryConnect } = require('./config/cloudinary');
const { connect } = require('./config/database');


connect();
cloudinaryConnect();




const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests




const mongoose = require('mongoose');

// Connect to MongoDB


// Sample API Route
/*
app.get('/', (req, res) => {
  res.send('Hello from Express backend!');
});
*/

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
