import React from 'react';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';

function UserProfile() {
  const { isOnline, setIsOnline } = useContext(UserContext);

  const handleClick = () => {
    setIsOnline(!isOnline);
  };

  return (
    <>
      <div>User is {isOnline ? 'Online' : 'Offline'}</div>
      <button onClick={handleClick}>Click to change user status</button>
    </>
  );
}

export default UserProfile;
