import React from 'react';
import { useAuthContext } from '../AuthContext';
import { DocumentSnapshot } from 'firebase/firestore';

const Home = () => {
  const { handleAddNew } = useAuthContext();

  // setDoc is used mainly for editing it overwrite the documents with similar id

  // add doc tells firestore help us auto generate an id and it's for creating a new value

  // updateDoc Doesn't touch unchanged values like server time stamp
  return (
    <div className='text-gray-700 text-2xl'>
      <p>This is my landing page</p>
      <button onClick={handleAddNew}>New</button>
    </div>
  );
};

export default Home;
