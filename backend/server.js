//Import required libraries
const express = require('express');
const cors = require('cors');
const db = require('./database');

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


// Test database connection
app.get('/api/db-test', (req, res) => {
  db.all('SELECT * FROM transactions', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ 
        message: 'Database connected!',
        rowCount: rows.length,
        data: rows
      });
    }
  });
});

// CREATE - Add new transaction
app.post('/api/transactions', (req, res) => {
  const { date, description, amount, category, type } = req.body;
  
  // Validate required fields
  if (!date || !amount || !type) {
    return res.status(400).json({ 
      error: 'Missing required fields: date, amount, type' 
    });
  }
  
  // Validate type
  if (type !== 'income' && type !== 'expense') {
    return res.status(400).json({ 
      error: 'Type must be either "income" or "expense"' 
    });
  }
  
  // Insert into database
  const sql = `
    INSERT INTO transactions (date, description, amount, category, type)
    VALUES (?, ?, ?, ?, ?)
  `;
  
  db.run(sql, [date, description, amount, category, type], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    res.status(201).json({
      message: 'Transaction created successfully',
      id: this.lastID,
      transaction: {
        id: this.lastID,
        date,
        description,
        amount,
        category,
        type
      }
    });
  });
});

// READ - Get all transactions
app.get('/api/transactions', (req, res) => {
  const sql = 'SELECT * FROM transactions ORDER BY date DESC';
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    res.json({
      message: 'Transactions retrieved successfully',
      count: rows.length,
      transactions: rows
    });
  });
});

// READ - Get single transaction by ID
app.get('/api/transactions/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM transactions WHERE id = ?';
  
  db.get(sql, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    if (!row) {
      return res.status(404).json({ 
        error: 'Transaction not found' 
      });
    }
    
    res.json({
      message: 'Transaction retrieved successfully',
      transaction: row
    });
  });
});

// DELETE - Remove transaction by ID
app.delete('/api/transactions/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM transactions WHERE id = ?';
  
  db.run(sql, [id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    if (this.changes === 0) {
      return res.status(404).json({ 
        error: 'Transaction not found' 
      });
    }
    
    res.json({
      message: 'Transaction deleted successfully',
      id: id
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});