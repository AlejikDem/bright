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

const SignForm = ({ title, logIn, hint, buttonText, onSubmit }) => {
  return (
    <Form>
      <Title>{title}</Title>
      <div style={{ marginBottom: '15px' }} >
        <Hint hint={hint} />
      </div>
      {!logIn && <InputWrapper>
        <TextInput placeholder="name" />
      </InputWrapper>}
      <InputWrapper>
        <TextInput placeholder="email" />
      </InputWrapper>
      <InputWrapper>
        <TextInput placeholder="password" />
      </InputWrapper>
      <FormBottom>
        <Button
          size="middle"
          color="success"
          onClick={onSubmit}
        >
          {buttonText}
        </Button>
      </FormBottom>
    </Form>
  );
};

export default SignForm;