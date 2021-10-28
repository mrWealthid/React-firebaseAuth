import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../AuthContext';

const Navlinks = () => {
  const { users, logout } = useAuthContext();
  return (
    <div>
      <NavLink to='/'> Home</NavLink>
      {users && <NavLink to='/dashBoard'> Dashboard</NavLink>}
      {!users ? (
        <NavLink to='/Signup'> Signup</NavLink>
      ) : (
        <NavLink to='/logout' onClick={logout}>
          {' '}
          Logout
        </NavLink>
      )}
    </div>
  );
};

export default Navlinks;
