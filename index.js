// 1. Zaroori packages ko import karna
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// 2. Environment variables ko load karna
dotenv.config();

// 3. Express app ko initialize karna
const app = express();

// 4. Server ko Port Batana
const PORT = process.env.PORT || 5000;

// 5. Middleware ka istemal
app.use(cors()); // Cross-Origin Resource Sharing ko enable karna
app.use(express.json()); // JSON requests ko parse karne ke liye

// 6. Ek Test Route Banana
app.get('/', (req, res) => {
  res.json({ message: "Portfolio ka server kamyabi se chal raha hai!" });
});

// 7. Server ko Start Karna
app.listen(PORT, () => {
  console.log(`Server port ${PORT} par chal raha hai...`);
});