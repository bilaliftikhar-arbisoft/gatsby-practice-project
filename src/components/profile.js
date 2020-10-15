import React from 'react';
import { useParams } from '@reach/router';
import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from '../selectors/user';
import { headerSet } from '../actions/header';

const Profile = () => {
  const dispatch = useDispatch();
  dispatch(headerSet('Profile'));
  const { id } = useParams();
  const user = useSelector((state) => selectUser(state, id));

  return (
    <div>
      <h1>Profile {id}</h1>
      {user ? <div>
        <img src={user.profile_image} alt="Logo" />
        <h6>{user.intro}</h6>
        <h6>{user.about}</h6>
        <h6>{user.education}</h6>
        <h6>{user.skill}</h6>
        <h6>{user.id}</h6>
        <h6>{user.first_name}</h6>
        <h6>{user.last_name}</h6>
        <h6>{user.email}</h6>
        <h6>{user.gender}</h6>
        <h6>{user.address}</h6>
        <h6>{user.contact}</h6>
      </div> :
        <h1></h1>
      }


    </div>
  );
};

export default Profile;
