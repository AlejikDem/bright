import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faSignOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt';


import routes from './helpers/routes';
import light from './themes/light';

import UserMenuContainer from './components/UserMenu/UserMenuContainer';

fontawesome.library.add(brands, faSignOutAlt);

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

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 0;
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
`;

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route {...rest} render={props => (
    isLoggedIn
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/auth',
          state: { from: props.location }
        }} />
  )} />
);

const App = ({ isLoggedIn, isInitiated }) => {
  return (
    <ThemeProvider theme={themes['light']}>
      <Router>
        <Wrapper>
          <Header>
            <HeaderInner>
              <UserMenuContainer />
            </HeaderInner>
          </Header>
          {isInitiated && (
            <Switch>
              {routes.map(route => (
                route.protected
                  ? <ProtectedRoute {...route} key={route.path} isLoggedIn={isLoggedIn} />
                  : <Route {...route} key={route.path} />
              ))}
            </Switch>
          )}
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
