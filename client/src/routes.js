import Goals from './components/Goals/Goals';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';

const routes = [
  {
    path: '/',
    exact: true,
    protected: true,
    component: Goals
  },
  {
    path: '/login',
    exact: false,
    protected: false,
    component: LogIn
  },
  {
    path: '/signup',
    exact: false,
    protected: false,
    component: SignUp
  }
];

export default routes;