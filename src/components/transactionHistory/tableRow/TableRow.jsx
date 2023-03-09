import css from './TableRow.module.css';

export function TableRow({ type, amount, currency }) {
  return (
    <tr className={css.row}>
      <td className={css.type}>{type}</td>
      <td className={css.amount}>{amount}</td>
      <td className={css.currency}>{currency}</td>
    </tr>
  );
}
