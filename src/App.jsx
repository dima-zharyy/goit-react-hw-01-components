import Profile from './components/Profile';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions} />
    </div>
  );
}
