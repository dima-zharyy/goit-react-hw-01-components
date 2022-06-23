import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(item => {
        return (
          <FriendListItem
            key={item.key}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
