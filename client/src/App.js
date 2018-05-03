import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Goals from './components/Goals/Goals';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';

import light from './themes/light';

const Wrapper = styled.div``;

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
          <Switch>
            <ProtectedRoute exact path="/" component={Goals} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
