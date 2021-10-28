import React from 'react';
import { useAuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';

const UpdateProfile = () => {
  const { setUpdateEmails, updateEmails, handleUpdate } = useAuthContext();
  return (
    <div className='w-7/12 lg:w-5/12 flex flex-col gap-2'>
      <h3>Update Profile</h3>
      <div className='py-6 px-8 flex flex-col gap-2 items-center bg-gray-200 '>
        <input
          type='email'
          placeholder='Enter Your Email Address'
          value={updateEmails}
          onChange={(e) => setUpdateEmails(e.target.value)}
          className='my-2 block w-full p-3 rounded-md outline-none bg-gray-100'
        />

        <button
          className='bg-gray-700 text-white text-sm w-4/12 md:text-base rounded-lg hover:bg-gray-500 py-2 px-7 transition ease-linear duration-1000'
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link className='text-underline text-blue-700' to='/'>
          Cancel{' '}
        </Link>
      </div>
    </div>
  );
};

export default UpdateProfile;
