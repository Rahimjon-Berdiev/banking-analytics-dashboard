//Import required libraries
const express = require('express');
const cors = require('cors');

//Create Express application
const app = express();

//Define port 
const PORT = 3000;


//Middleware
app.use(cors());           // Enable CORS
app.use(express.json());    // Parse JSON bodies

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Banking Analytics Dashboard API',
    version: '1.0.0',
    status: 'running'
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});