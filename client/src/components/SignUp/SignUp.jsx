import React from 'react';
import { Link } from 'react-router-dom';

import MainTitle from '../MainTitle/MainTitle';
import SignForm from '../SignForm/SignForm';

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
      <SignForm
        title="Please Sign Up"
        hint={<SignUpHint />}
        buttonText="Sign Up"
        onSubmit={() => console.log('Sign Up')}
      />
    </React.Fragment>
  );
};

export default LogIn;