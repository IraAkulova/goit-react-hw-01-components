import PropTypes from 'prop-types';
import { Header } from './header/Header';
import { Table } from './table/Table';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <Header />
      <Table transactions={items} />
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

