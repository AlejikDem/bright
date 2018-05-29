import React from 'react';
import styled from 'styled-components';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const avatar = require('../../assets/images/pug1.jpg');

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${({avatar}) => avatar });
  background-position: center;
  background-size: cover;
  cursor: pointer;
  margin-right: 10px;
`;

const LogOut = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.success};
  cursor: pointer;
`;

const UserMenu = (props) => {
  return (
    <Wrapper>
      <Avatar avatar={avatar} />
      <LogOut icon="sign-out-alt" size="2x" />
    </Wrapper>
  );
};

export default UserMenu;