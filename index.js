const express = require('express');
const data = require('./data');
const dotenv = require('dotenv');
dotenv.config();

const server = express();

// Define the root route
server.get('/', (req, res) => {
    res.json(data);
});

// Check if PORT is defined in .env and fallback to a default port if not
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
