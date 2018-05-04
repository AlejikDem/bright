import React from 'react';
import { Link } from 'react-router-dom';

import MainTitle from '../MainTitle/MainTitle';
import SignForm from '../SignForm/SignForm';

const LogInHint = () => {
  return (
    <div>
      <span>Don't have account? Please </span>
      <Link to="signup">sign up</Link>
    </div>
  );
};

const LogIn = () => {
  return (
    <React.Fragment>
      <MainTitle />
      <SignForm
        title="Please Log In"
        hint={<LogInHint />}
        logIn
        buttonText="Log In"
        onSubmit={() => console.log('Log in')}
      />
    </React.Fragment>
  );
};

export default LogIn;