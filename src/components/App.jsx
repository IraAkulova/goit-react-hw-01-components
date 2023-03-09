import { Profile } from 'components/profile/Profile';
import { FriendList } from './friendList/FriendList';
import { Statistics } from './statistics/Statistics';
import friends from 'friends.json';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

