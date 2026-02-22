// Import SQLite3 library
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Define database file path
const dbPath = path.join(__dirname, 'transactions.db');

// Create/open database connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Error opening database:', err.message);
  } else {
    console.log('✅ Connected to SQLite database');
  }
});

// Create transactions table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      description TEXT,
      amount REAL NOT NULL,
      category TEXT,
      type TEXT CHECK(type IN ('income', 'expense')) NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('❌ Error creating table:', err.message);
    } else {
      console.log('✅ Transactions table ready');
    }
  });
});

// Export database instance
module.exports = db;