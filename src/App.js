import React from 'react';
import ReactDOM from 'react-dom';
import LoginButton from './login';
import Logout from './logout';
import Profile from './profile';

function App() {
  return (
    <div>
      <LoginButton />
      <Logout />
      <Profile />
    </div>
  );
}

export default App;
