import React from 'react';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const classNames = [styles.status, styles.isOnline];
  return (
    <li className={styles.item}>
      <span className={isOnline ? classNames.join(' ') : styles.status}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
