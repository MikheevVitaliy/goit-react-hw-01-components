import PropTypes from 'prop-types';
import scc from './FriendList.module.css';

export const FriendListItem = ({ friend: { name, avatar, isOnline } }) => {
  console.log(name, 'name');
  return (
    <>
      <span className={isOnline ? scc.online : scc.offline}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
