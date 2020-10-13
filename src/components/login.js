import React, { useEffect } from 'react';
import { logout } from '../services/auth';

const Login = () => {
  useEffect(() => {
    logout();
  });
  return (
    <h1>Login!</h1>
  );
};

export default Login;
