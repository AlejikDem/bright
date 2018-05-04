import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  padding: 10px 15px;
  font-size: ${p => p.size === 'middle' ? 18 : 14}px;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  background-color: ${p => p.theme[p.color]};
  color: ${p => p.theme.invertedText};

  &:focus {
    outline: none;
  }
`;

const Button = ({ children, onClick, color, size }) => {
  return (
    <ButtonComponent
      type="button"
      color={color}
      size={size}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;