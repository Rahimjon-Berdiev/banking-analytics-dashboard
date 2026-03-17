import './Summary.css';

function Summary({ transactions }) {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const balance = income - expenses;

  return (
    <>
      <div className="summary">
        <div className="summary-card income">
          <div className="label">Total Income</div>
          <div className="value">€{income.toFixed(2)}</div>
        </div>

        <div className="summary-card expense">
          <div className="label">Total Expenses</div>
          <div className="value">€{expenses.toFixed(2)}</div>
        </div>

        <div className="summary-card balance">
          <div className="label">Balance</div>
          <div className="value">€{balance.toFixed(2)}</div>
        </div>
      </div>

      {balance < 0 && (
        <div className="alert alert-warning">
          <span style={{ fontSize: '1.25rem' }}>⚠️</span>
          <div>
            <strong>Budget Alert:</strong> You've spent €{Math.abs(balance).toFixed(2)} more than you've earned. 
            Consider reducing expenses or adding income sources.
          </div>
        </div>
      )}

      {balance > 0 && balance < 500 && (
        <div className="alert alert-success">
          <span style={{ fontSize: '1.25rem' }}>✅</span>
          <div>
            <strong>Good progress!</strong> You've saved €{balance.toFixed(2)} this period.
          </div>
        </div>
      )}

      {balance >= 500 && (
        <div className="alert alert-success">
          <span style={{ fontSize: '1.25rem' }}>🎉</span>
          <div>
            <strong>Excellent!</strong> You've saved €{balance.toFixed(2)}! Keep up the great work!
          </div>
        </div>
      )}
    </>
  );
}

export default Summary;