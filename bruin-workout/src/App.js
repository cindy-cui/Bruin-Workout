import './styles/App.css';
import React from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import {Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PrivateRoute />} />
        <Route path='/login' element={<Login />}/> 
        <Route path='/signup' element={<Signup />}/>
        <Route path='/myprofile' element={<Profile /> /*username={user.username}*/}/>
        <Route element={<Error />} />
      </Routes>
    </div>
  );
  /*
  Notes by Daniel Shim:
   As of now, the PrivateRoute returns a Navigate object to the login page because the user
   authentication stuff has not been added.
   Also, NavigationError is intended to be the default when a user types a nonexistent URL but
   it doesn't work right now.
  Login should be able to change to logout depending on whether user is already logged in.
  */
}

export default App;
