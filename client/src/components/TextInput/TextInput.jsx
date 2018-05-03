import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  height: ${p => p.theme.bigInputHeight};
  padding: ${p => p.theme.bigInputPadding};
  width: 100%;
  color: ${p => p.theme.primaryText};
  border: 2px solid ${p => p.theme.bg2};
  border-radius: 10px;
  font-size: ${p => p.theme.bigInputSize};

  &:focus {
    outline: none;
  }
`;

const TextInput = props => {
  return (
    <Input type="text" {...props} />
  );
};

export default TextInput;