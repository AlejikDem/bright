import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Button from '../components/Button/Button';

const Row = styled.div`
  margin-bottom: 20px;
`;

const Cell = styled.div`
  display: inline-block;
  margin: 0 10px;
`;

storiesOf('Buttons', module)
  .add('buttons', () => (
    <div>
      <Row>
        <Cell>
          <Button color="success" size="middle">Button</Button>
        </Cell>
        <Cell>
          <Button color="danger" size="middle">Button</Button>
        </Cell>
        <Cell>
          <Button color="info" size="middle">Button</Button>
        </Cell>
        <Cell>
          <Button color="warn" size="middle">Button</Button>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Button color="success" size="small">Button</Button>
        </Cell>
        <Cell>
          <Button color="danger" size="small">Button</Button>
        </Cell>
        <Cell>
          <Button color="info" size="small">Button</Button>
        </Cell>
        <Cell>
          <Button color="warn" size="small">Button</Button>
        </Cell>
      </Row>
    </div>
  ));
