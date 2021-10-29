import React, { createContext, useState, useContext, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth, db } from './firebase-config';
import { useHistory } from 'react-router-dom';
import { onSnapshot, collection } from 'firebase/firestore';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [register, setRegister] = useState({
    email: '',
    password: '',
  });
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [users, setUsers] = useState({});
  const [updateEmails, setUpdateEmails] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [confirmFields, setConfirmFields] = useState(true);
  const [alert, setAlert] = useState({
    type: false,
    msg: '',
  });
  const [buttonLoader, setButtonLoader] = useState(false);
  const history = useHistory();

  useEffect(
    () =>
      onSnapshot(collection(db, 'product'), (snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data()));
      }),
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ ...alert, type: false });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
    });

    return unsubscribe;
  }, []);

  //To Disable Button when the fields are empty for login
  useEffect(() => {
    if (login.email !== '' && login.password !== '') {
      setConfirmFields(false);
    } else {
      setConfirmFields(true);
    }
  }, [login.email, login.password, resetEmail]);

  useEffect(() => {
    if (resetEmail !== '') {
      setConfirmFields(false);
    } else {
      setConfirmFields(true);
    }
  }, [resetEmail]);

  //To Disable Button when the fields are empty for signup
  useEffect(() => {
    if (register.email !== '' && register.password !== '') {
      setConfirmFields(false);
    } else {
      setConfirmFields(true);
    }
  }, [register.email, register.password]);

  //using then convention
  const Register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,

      register.email,
      register.password
    )
      .then((data) => setButtonLoader(true))

      .then(() => {
        setTimeout(() => {
          setButtonLoader(false);
          history.push('/');

          setRegister({
            email: '',
            password: '',
          });
        }, 1500);
      })
      .catch((error) => {
        const { message, code } = error;
        console.log(message);
        console.log(code);
        setAlert({
          type: true,
          msg:
            code === 'auth/email-already-in-use'
              ? 'Email Already In Use'
              : code === 'auth/network-request-failed'
              ? 'Check Your Network Connection'
              : '',
        });

        setButtonLoader(true);

        setTimeout(() => {
          setButtonLoader(false);
        }, 3000);
      });
  };

  //using async await
  const HandleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, login.email, login.password);
      setButtonLoader(true);
      setTimeout(() => {
        setButtonLoader(false);
        history.push('/');

        setLogin({
          email: '',
          password: '',
        });
      }, 1500);
    } catch (error) {
      console.log(error.message);
      setAlert({
        type: true,
        msg: 'Failed To Login Try Again!!',
      });
      setButtonLoader(true);

      setTimeout(() => {
        setButtonLoader(false);
      }, 3000);
    }
  };

  const logout = async () => {
    await signOut(auth);
    history.push('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleUpdate = async () => {
    // updateCurrentUser(updateEmail);
    console.log(updateEmails);
    try {
      //   await .user.updateEmail('newyou@domain.com')
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleReset = async () => {
    try {
      setAlert('');
      console.log(resetEmail);
      await sendPasswordResetEmail(auth, resetEmail);
      setAlert('Check your inbox for link');
    } catch (err) {
      console.log(err.message);
      setAlert('Failed to reset password');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        updateEmails,
        setUpdateEmails,
        HandleLogin,
        login,
        logout,
        handleChange,
        handleChange2,
        register,
        Register,
        users,
        handleUpdate,
        resetEmail,
        setResetEmail,
        handleReset,
        ...alert,
        confirmFields,
        buttonLoader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { useAuthContext, AuthProvider };
