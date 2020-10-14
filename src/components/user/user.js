import React from 'react';
import { navigate } from '@reach/router';

export const User = ({ user }) => <div onClick={() => navigate(`profile/${user.id}`)}>{user.last_name}</div>;
