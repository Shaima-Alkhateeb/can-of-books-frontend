import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  console.log(useAuth0)

  return isAuthenticated && (<div>Hello {user.name}</div>);
}

export default Profile;