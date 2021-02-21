import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './default.jpg';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, id, isOnline }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImg,
  isOnline: false,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.oneOf([true, false]),
    }),
  ).isRequired,
};

export default FriendList;
