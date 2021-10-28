import './App.css';
import Navlinks from './components/Navlinks';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import PrivateRoutes from './components/PrivateRoutes';

import DashBoard from './components/DashBoard';
import { useAuthContext } from './AuthContext';
import UpdateProfile from './components/UpdateProfile';
import ResetPassword from './components/ResetPassword';

function App() {
  const { users } = useAuthContext();
  return (
    <div className='flex flex-col w-10/12 mx-auto justify-center'>
      <Navlinks />

      <section className='min-h-screen gap-4 flex flex-col justify-center items-center '>
        <h5 className='text-black-600 text-lg'>
          User Logged In: {users?.email}
        </h5>

        <Switch>
          <PrivateRoutes exact path='/' component={Profile} />
          {/* <PrivateRoutes path='/profile' component={Profile} /> */}
          <PrivateRoutes path='/Dashboard' component={DashBoard} />
          <Route path={'/Signup'} component={Signup} />
          <Route path={'/login'} component={Login} />
          <Route path={'/update-profile'} component={UpdateProfile} />
          <Route path={'/resetPassword'} component={ResetPassword} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
