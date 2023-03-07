import PropTypes from 'prop-types';
import { Card } from 'components/card/Card';
import user from 'user.json';
import { StatsItem } from 'components/statsItem/StatsItem';
import css from './Profile.module.css';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <Card
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <StatsItem stats={user.stats} />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
