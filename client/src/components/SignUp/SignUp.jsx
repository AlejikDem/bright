import React from 'react';
import { Link } from 'react-router-dom';

import MainTitle from '../MainTitle/MainTitle';
import SignFormContainer from '../SignForm/SignFormContainer';

const SignUpHint = () => {
  return (
    <div>
      <span>Already has an account? Please </span>
      <Link to="login">log in</Link>
    </div>
  );
};

const LogIn = () => {
  return (
    <React.Fragment>
      <MainTitle />
      <SignFormContainer hint={<SignUpHint />} />
    </React.Fragment>
  );
};

export default LogIn;