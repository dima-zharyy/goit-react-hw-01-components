import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline, key }) {
  return (
    <li class="item" key={key}>
      {isOnline ? (
        <span class="status online"></span>
      ) : (
        <span class="status ofline"></span>
      )}

      <img class="avatar" src={avatar} alt={`${name} avatar`} width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  key: PropTypes.string.isRequired,
};
