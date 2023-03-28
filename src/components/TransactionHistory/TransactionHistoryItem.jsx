import PropTypes from 'prop-types';
import scc from './TransactionHistory.module.css';

export const TransactionHistoryItem = ({
  transaction: { type, amount, currency },
}) => {
  return (
    <>
      <td className={scc.td_sec}>{type}</td>
      <td className={scc.td_sec}>{amount}</td>
      <td className={scc.td_sec}>{currency}</td>
    </>
  );
};

TransactionHistoryItem.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
