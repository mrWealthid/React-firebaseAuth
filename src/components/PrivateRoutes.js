import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../AuthContext';

function PrivateRoutes({ component: Component, ...rest }) {
  //from a register api
  // const getToken = () => {
  //   return sessionStorage.getItem('token') || null;
  // };

  //from firestore auth
  // const { currentUser } = auth;

  const { users } = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) =>
        // getToken() ? <Component {...props} /> : <Redirect to='/login' />
        users ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
}

export default PrivateRoutes;
