import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Goals from './components/Goals/Goals';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';

import light from './themes/light';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background-color: ${props => props.theme.wrapperBg};
  font-family: ${p => p.theme.fontFamily};
`;

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    false === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
);

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <Router>
        <Wrapper>
          <div>
            <Switch>
              <ProtectedRoute exact path="/" component={Goals} />
              <Route path="/login" component={LogIn} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </div>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
