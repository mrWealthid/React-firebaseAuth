import React from 'react';
import { useAuthContext } from '../AuthContext';

const Home = () => {
  const { handleAddNew } = useAuthContext();

  // setDoc is used mainly for editing it overwrite the documents with similar id

  // add doc tells firestore help us auto generate an id and it's for creating a new value
  return (
    <div className='text-gray-700 text-2xl'>
      <p>This is my landing page</p>
      <button onClick={handleAddNew}>New</button>
    </div>
  );
};

export default Home;
