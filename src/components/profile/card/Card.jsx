import css from './Card.module.css';

export function Card({ avatar, username, tag, location }) {
  return (
    <div className={css.description}>
      {' '}
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};
