import Profile from './components/Profile';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';

import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';

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
    </div>
  );
}
