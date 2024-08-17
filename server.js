// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Proxy route to forward requests to the Swiggy API
app.get('/api/*', async (req, res) => {
  const apiUrl = `https://www.swiggy.com${req.originalUrl.replace('/api', '')}`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json({ error: error.message });
  }
});

// Serve the React app for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
