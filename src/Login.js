import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  function handleLogin() {
    loginWithRedirect();
  }

  return !isAuthenticated && (
    <button onClick={handleLogin}>Log in</button>
  );
}

export default LoginButton;