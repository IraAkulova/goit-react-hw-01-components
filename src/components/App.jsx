import { Profile } from 'components/profile/Profile';
import user from 'user.json';
import { FriendList } from './friendList/FriendList';
import data from 'data.json';
import { Statistics } from './statistics/Statistics';
import friends from 'friends.json';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

