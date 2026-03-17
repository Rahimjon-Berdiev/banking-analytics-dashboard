// Base URL for our backend API
const API_URL = 'http://localhost:3000/api';

// Get all transactions
export const getTransactions = async () => {
  try {
    const response = await fetch(`${API_URL}/transactions`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch transactions');
    }
    
    const data = await response.json();
    return data.transactions;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

// Add a new transaction
export const addTransaction = async (transaction) => {
  try {
    const response = await fetch(`${API_URL}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    });
    
    if (!response.ok) {
      throw new Error('Failed to add transaction');
    }
    
    const data = await response.json();
    return data.transaction;
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error;
  }
};

// Delete a transaction
export const deleteTransaction = async (id) => {
  try {
    const response = await fetch(`${API_URL}/transactions/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete transaction');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting transaction:', error);
    throw error;
  }
};