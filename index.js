const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

// Error handling if data file is not found or has issues
let data;
try {
    data = require('./data');
} catch (error) {
    console.error('Failed to load data:', error);
    process.exit(1); // Exit the process if data cannot be loaded
}

const server = express();

// Optional: Use CORS if needed
// const cors = require('cors');
// server.use(cors());

// Optional: Use Helmet for basic security
// const helmet = require('helmet');
// server.use(helmet());

// Define the root route
server.get('/', (req, res) => {
    res.json(data);
});

// Check if PORT is defined in .env and fallback to a default port if not
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
