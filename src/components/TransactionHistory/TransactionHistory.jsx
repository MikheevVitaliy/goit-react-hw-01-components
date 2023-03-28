import PropTypes from 'prop-types';
import scc from './TransactionHistory.module.css';
import { TransactionHistoryItem } from './TransactionHistoryItem';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={scc.transaction_history}>
      <thead className={scc.transaction}>
        <tr className={scc.tr_sec}>
          <th className={scc.th_sec}>Type</th>
          <th className={scc.th_sec}>Amount</th>
          <th className={scc.th_sec}>Currency</th>
        </tr>
      </thead>

      <tbody className={scc.transaction_list}>
        {transactions.map(transaction => (
          <tr key={transaction.id} className="transaction-item">
            <TransactionHistoryItem transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
