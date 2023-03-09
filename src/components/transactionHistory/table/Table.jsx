import css from './Table.module.css';

import { TableRow } from "../tableRow/TableRow";

export function Table({ transactions }) {
  return (
      <tbody className={css.tableBody}>
          {transactions.map(transaction => 
          (<TableRow key={transaction.id}
              type={transaction.type} 
              amount={transaction.amount} 
              currency={transaction.currency}/>)
        )}

    </tbody>
  );
};