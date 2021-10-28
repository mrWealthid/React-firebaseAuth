import React from 'react';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../AuthContext';

const Signup = () => {
  const {
    Register,
    handleChange2,
    register,
    confirmFields,
    type,
    msg,
    buttonLoader,
  } = useAuthContext();

  return (
    <div className='w-8/12 lg:w-5/12 flex flex-col gap-2'>
      <form
        className='py-6 px-8 flex flex-col gap-2 items-center bg-gray-200 '
        onSubmit={Register}
      >
        <p className='text-2xl'>Register</p>
        {type ? (
          <p className='text-white bg-red-400 p-2 rounded'>{msg}</p>
        ) : null}
        <input
          type='text'
          placeholder='email'
          value={register.email}
          name='email'
          onChange={handleChange2}
          className='my-2 block w-full p-3 rounded-md outline-none bg-gray-100'
        />
        <input
          type='password'
          placeholder='password'
          value={register.password}
          name='password'
          onChange={handleChange2}
          className='my-2 block w-full p-3 rounded-md outline-none bg-gray-100'
        />
        <button
          className={` ${
            confirmFields ? 'bg-gray-400' : ' bg-gray-700 hover:bg-gray-500'
          }  text-white text-sm w-4/12 md:text-base rounded-lg  py-2 px-7 text-white transition ease-linear duration-1000`}
          disabled={confirmFields}
        >
          {buttonLoader ? 'Loading...' : 'Register'}
        </button>
        <p>
          {' '}
          Already Have An Account{' '}
          <Link className='text-blue-700' to='/login'>
            Login
          </Link>{' '}
        </p>{' '}
      </form>
    </div>
  );
};

export default Signup;
