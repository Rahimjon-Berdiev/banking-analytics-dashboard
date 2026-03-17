import { useState, useEffect } from 'react';
import { getTransactions } from './services/api';
import Summary from './components/Summary';
import TransactionList from './components/TransactionList';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const data = await getTransactions();
      setTransactions(data);
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to refresh data
  const refreshTransactions = () => {
    fetchTransactions();
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>💰 Banking Analytics Dashboard</h1>
        <p>Track your income and expenses</p>
      </header>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <Summary transactions={transactions} />
          <TransactionList 
            transactions={transactions}
            onTransactionDeleted={refreshTransactions}
          />
        </>
      )}
    </div>
  );
}

export default App;