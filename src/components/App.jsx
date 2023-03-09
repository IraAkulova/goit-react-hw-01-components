import { Profile } from 'components/profile/Profile';
import { FriendList } from './friendList/FriendList';
import { Statistics } from './statistics/Statistics';
import friends from 'friends.json';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList friends={friends} />
    </div>
  );
};

