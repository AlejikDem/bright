import React from 'react';
import styled from 'styled-components';

import Hint from '../Hint/Hint';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

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

const SignForm = ({
  inputs,
  onInputChange,
  logIn,
  hint,
  startLogin,
  startSignUp
}) => {
  return (
    <Form>
      <Title>Please {logIn ? 'Log In' : 'Sign Up'}</Title>
      <div style={{ marginBottom: '15px' }} >
        <Hint hint={hint} />
      </div>
      {!logIn && <InputWrapper>
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
            logIn
              ? startLogin.bind(null, inputs)
              : startSignUp.bind(null, inputs)
          }
        >
          {logIn ? 'Log In' : 'Sign Up'}
        </Button>
      </FormBottom>
    </Form>
  );
};

export default SignForm;