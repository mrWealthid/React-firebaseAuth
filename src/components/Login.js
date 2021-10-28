import React from 'react';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../AuthContext';

const Login = () => {
  const {
    handleChange,
    HandleLogin,
    login,
    confirmFields,
    buttonLoader,
    type,
    msg,
  } = useAuthContext();

  return (
    <div className='w-8/12 lg:w-5/12 flex flex-col gap-2'>
      <form
        className='py-6 px-8 flex flex-col gap-2 items-center bg-gray-200 '
        onSubmit={HandleLogin}
      >
        <p className='text-2xl'> Login</p>

        {type ? (
          <p className='text-white bg-red-400 p-2 rounded'>{msg}</p>
        ) : null}

        <input
          type='email'
          placeholder='john@example.com'
          name='email'
          className='my-2 block w-full p-3 rounded-md outline-none bg-gray-100'
          value={login.email}
          onChange={handleChange}
        />

        <input
          type='password'
          placeholder='Enter Password'
          name='password'
          className='my-2 block w-full p-3 rounded-md outline-none bg-gray-100'
          value={login.password}
          onChange={handleChange}
        />

        <button
          className={` ${
            confirmFields ? 'bg-gray-400' : ' bg-gray-700 hover:bg-gray-500'
          }  text-white text-sm w-4/12 md:text-base rounded-lg  py-2 px-7 text-white transition ease-linear duration-1000`}
          disabled={confirmFields}
        >
          {buttonLoader ? 'Loading...' : 'Login'}
        </button>
        <Link className='text-blue-600' to='/resetPassword'>
          Forgot Password{' '}
        </Link>

        <p>
          Need An Account {''}{' '}
          <Link className='text-blue-600' to='/Signup'>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
