import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  padding: 10px 15px;
  font-size: 18px;
  border-radius: 10%;
  cursor: pointer;
  border: none;
  background-color: ${p => p.theme[p.color]};
  color: ${p => p.theme.invertedText};

  &:focus {
    outline: none;
  }
`;

const Button = ({ text, onClick, color, size }) => {
  return (
    <ButtonComponent
      type="button"
      color={color}
      size={size}
      onClick={onClick}
    >
      {text}
    </ButtonComponent>
  );
};

export default Button;