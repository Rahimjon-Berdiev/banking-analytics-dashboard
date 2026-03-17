import { useState } from 'react';
import { deleteTransaction } from '../services/api';
import './TransactionList.css';

function TransactionList({ transactions, onTransactionDeleted }) {
  const [deleting, setDeleting] = useState(null);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this transaction?')) {
      return;
    }

    try {
      setDeleting(id);
      await deleteTransaction(id);
      
      // Notify parent to refresh
      onTransactionDeleted();
      
    } catch (err) {
      alert('Failed to delete transaction');
      console.error(err);
    } finally {
      setDeleting(null);
    }
  };

  if (transactions.length === 0) {
    return (
      <div className="empty-state">
        <p>No transactions yet!</p>
        <p>Add your first transaction to get started.</p>
      </div>
    );
  }

  return (
    <div className="transaction-list">
      <h2>Recent Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className={transaction.type}>
              <td>{transaction.date}</td>
              <td>{transaction.description || '-'}</td>
              <td>{transaction.category || '-'}</td>
              <td className="amount">
                €{Math.abs(transaction.amount).toFixed(2)}
              </td>
              <td>
                <span className={`badge ${transaction.type}`}>
                  {transaction.type}
                </span>
              </td>
              <td>
                <button 
                  className="delete-btn"
                  onClick={() => handleDelete(transaction.id)}
                  disabled={deleting === transaction.id}
                >
                  {deleting === transaction.id ? 'Deleting...' : 'Delete'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;