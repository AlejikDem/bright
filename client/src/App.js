import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import routes from './helpers/routes';

import light from './themes/light';

const themes = {
  light
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background-color: ${props => props.theme.wrapperBg};
  font-family: ${p => p.theme.fontFamily};
`;

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route {...rest} render={props => (
    isLoggedIn
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
);

const App = ({ isLoggedIn }) => {
  return (
    <ThemeProvider theme={themes['light']}>
      <Router>
        <Wrapper>
          <div>
            <Switch>
              {routes.map(route => (
                route.protected
                  ? <ProtectedRoute {...route} key={route.path} isLoggedIn={isLoggedIn} />
                  : <Route {...route} key={route.path} />
              ))}
            </Switch>
          </div>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
