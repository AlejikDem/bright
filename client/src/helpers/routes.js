import Goals from '../components/Goals/Goals';
import AuthContainer from '../components/Auth/AuthContainer';

const routes = [
  {
    path: '/',
    exact: true,
    protected: true,
    component: Goals
  },
  {
    path: '/auth',
    exact: false,
    protected: false,
    component: AuthContainer
  }
];

export default routes;