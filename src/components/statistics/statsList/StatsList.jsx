import css from './StatsList.module.css';

export function StatsList({ stats }) {
  return (
    <ul className={css.statList}>
      {stats.map(stat => {return (
        <li
          className={css.item}
          key={stat.id}
          style={{
            backgroundColor: getRandomHexColor(),
          }}
        >
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      );})}
    </ul>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

