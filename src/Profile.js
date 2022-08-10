import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  // console.log(useAuth0)

  return isAuthenticated && (
    <>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name} </h2>
      <h2>{user.email} </h2>
    </>
  )
  
}

export default Profile;