import css from './FriendListItem.module.css';

export function FriendListItem({ avatar, name, isOnline }) {
        return (
          <li className={css.item}>
            {isOnline
              ?(<span
                className={css.status}
                style={{
                  backgroundColor: '#00ff00',
                }}
              ></span>)
              :(<span
                  className={css.status}
                  style={{
                    backgroundColor: '#ff0000',
                  }}
                ></span>)}
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
};
