import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MainTitle from '../MainTitle/MainTitle';
import Hint from '../Hint/Hint';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const Title = styled.div`
  text-align: center;
  margin-bottom: 5px;
  font-size: 25px;
`;

const LogInForm = styled.div`
  max-width: 300px;
`;

const FormBottom = styled.div`
  text-align: center;
`;

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
      <LogInForm>
        <Title>Please Log In</Title>
        <div style={{ marginBottom: '15px' }} >
          <Hint children={<LogInHint />} />
        </div>
        <TextInput placeholder="email" style={{ marginBottom: '10px' }} />
        <TextInput placeholder="password" style={{ marginBottom: '10px' }} />
        <FormBottom>
          <Button
            text="Log In"
            size="middle"
            color="success"
            onClick={() => console.log('Log in')}
          />
        </FormBottom>
      </LogInForm>
    </React.Fragment>
  );
};

export default LogIn;