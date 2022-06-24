import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={`${css.status} ${css.online}`}></span>
      ) : (
        <span className={`${css.status} ${css.ofline}`}></span>
      )}

      <img
        className={css.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
