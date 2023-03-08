import css from './StatsItem.module.css';

export function StatsItem({ stats }) {
    return (
      <ul className={css.stats}>
        <li className={css.stat}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.stat}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views/1000}</span>
        </li>
        <li className={css.stat}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    );
};
