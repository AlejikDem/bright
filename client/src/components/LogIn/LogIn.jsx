import React from 'react';
import { Link } from 'react-router-dom';

import MainTitle from '../MainTitle/MainTitle';
import SignFormContainer from '../SignForm/SignFormContainer';

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
      <SignFormContainer hint={<LogInHint />} logIn />
    </React.Fragment>
  );
};

export default LogIn;