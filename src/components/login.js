import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { logout } from '../services/auth';
import { headerSet } from '../actions/header';


const Login = () => {
  const dispatch = useDispatch();
  dispatch(headerSet('Login'));
  useEffect(() => {
    logout();
  });
  return (
    <h1>Login!</h1>
  );
};

export default Login;
