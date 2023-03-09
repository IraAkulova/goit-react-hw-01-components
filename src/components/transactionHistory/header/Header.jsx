import css from './Header.module.css';

export function Header() {
  return (
    <thead className={css.tableHeader}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  );
}