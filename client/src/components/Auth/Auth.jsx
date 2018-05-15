import React from 'react';
import styled from 'styled-components';

import MainTitle from '../MainTitle/MainTitle';
import Hint from '../Hint/Hint';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const LogInHint = ({ toggleMode }) => {
  return (
    <div>
      <span>Don't have account? Please </span>
      <AuthLink onClick={toggleMode}>sign up</AuthLink>
    </div>
  );
};

const SignUpHint = ({ toggleMode }) => {
  return (
    <div>
      <span>Already has an account? Please </span>
      <AuthLink onClick={toggleMode}>log in</AuthLink>
    </div>
  );
};

const Title = styled.div`
  text-align: center;
  margin-bottom: 5px;
  font-size: 25px;
`;

const Form = styled.div`
  max-width: 300px;
`;

const FormBottom = styled.div`
  text-align: center;
`;

const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

const AuthLink = styled.span`
  cursor: pointer;
  font-weight: bold;
  color: ${({ theme }) => theme.success};
`;

const AuthComponent = ({
  isLogInForm,
  toggleMode,
  inputs,
  onInputChange,
  startLogin,
  startSignUp
}) => {
  return (
    <React.Fragment>
      <MainTitle />
      <Form>
        <Title>Please {isLogInForm ? 'Log In' : 'Sign Up'}</Title>
        <div style={{ marginBottom: '15px' }} >
          <Hint hint={
            isLogInForm
              ? <LogInHint toggleMode={toggleMode} />
              : <SignUpHint toggleMode={toggleMode} />}
          />
        </div>
        {!isLogInForm && <InputWrapper>
          <TextInput
            placeholder="name"
            value={inputs.name}
            onChange={e => onInputChange('name', e.target.value)}
          />
        </InputWrapper>}
        <InputWrapper>
          <TextInput
            placeholder="email"
            value={inputs.email}
            onChange={e => onInputChange('email', e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <TextInput
            placeholder="password"
            value={inputs.password}
            onChange={e => onInputChange('password', e.target.value)}
          />
        </InputWrapper>
        <FormBottom>
          <Button
            size="middle"
            color="success"
            onClick={
              isLogInForm
                ? startLogin.bind(null, inputs)
                : startSignUp.bind(null, inputs)
            }
          >
            {isLogInForm ? 'Log In' : 'Sign Up'}
          </Button>
        </FormBottom>
      </Form>
    </React.Fragment>
  );
};

export default AuthComponent;