import React from 'react';
import { useAuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { logout, users } = useAuthContext();
  return (
    <div className='w-5/12 flex flex-col gap-2'>
      <div className='flex py-6 px-2 flex-col items-center bg-gray-200 '>
        <p className='text-lg text-gray-700'>
          My Profile is available for view
        </p>
        <h1 className='text-xl font-bold'> {users.email}</h1>
        <br />
        <section className='flex gap-4 w-full justify-center'>
          <Link to='/update-profile'>
            <button
              className='bg-gray-700 text-white text-sm  md:text-base rounded-lg hover:bg-gray-500 py-2 px-4 transition ease-linear duration-1000'
              type='submit'
            >
              Update Profile
            </button>
          </Link>
          <button className='text-blue-700' onClick={logout} type='submit'>
            Logout
          </button>
        </section>
      </div>
    </div>
  );
};

export default Profile;
