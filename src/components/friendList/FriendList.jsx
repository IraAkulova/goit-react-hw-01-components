import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export function FriendList({ friends }) {
    return (
      <ul className={css.friendList}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            {friend.isOnline ? (
              <span
                className={css.status}
                style={{
                  backgroundColor: '#00ff00',
                }}
              ></span>
            ) : (
              <span
                className={css.status}
                style={{
                  backgroundColor: '#ff0000',
                }}
              ></span>
            )}
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
