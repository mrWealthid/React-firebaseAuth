import React from 'react';
import { useAuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const {
    resetEmail,
    setResetEmail,
    handleReset,
    Login,
    alert,
    confirmFields,
  } = useAuthContext();
  return (
    <div className='w-7/12 lg:w-5/12 flex flex-col gap-2'>
      <h3>Reset Password</h3>
      <p>{alert}</p>

      <div className='py-6 px-8 flex flex-col gap-2 items-center bg-gray-200 '>
        <input
          type='email'
          placeholder='Enter Your Email Address'
          value={resetEmail}
          onChange={(e) => setResetEmail(e.target.value)}
          className='my-2 block w-full p-3 rounded-md outline-none bg-gray-100'
        />

        <div className='flex flex-col gap-2 items-center justify-content'>
          <button
            className={` ${
              confirmFields ? 'bg-gray-400' : ' bg-gray-700 hover:bg-gray-500'
            }  text-white text-sm w-full md:text-base rounded-lg  py-2 px-7 text-white transition ease-linear duration-1000`}
            disabled={confirmFields}
            onClick={handleReset}
          >
            Reset Password
          </button>

          <Link to='/login' className='text-blue-600' onClick={Login}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
