import { withStateHandlers, lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';

import { startSignUp, startLogin } from '../../ducks/auth';

import Auth from './Auth';

const mapState = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn
});

const mapActions = {
  startSignUp,
  startLogin
};

const state = {
  isLogInForm: true,
  inputs: {
    name: '',
    email: 'signupper@gmail.com',
    password: 'helloHellowa'
  }
};

const onInputChange = state => (name, value) => ({
  ...state,
  inputs: {
    ...state.inputs,
    [name]: value
  }
});

const toggleMode = state => () => ({
  ...state,
  isLogInForm: !state.isLogInForm,
  inputs: {
    name: '',
    email: '',
    password: ''
  }
});

const enhance = compose(
  connect(mapState, mapActions),
  lifecycle({
    componentDidMount(){
      const { isLoggedIn, history } = this.props;
      if (isLoggedIn) history.replace('/');
    },
    componentWillReceiveProps({ isLoggedIn, history }) {
      if (isLoggedIn) history.push('/');
    }
  }),
  withStateHandlers(
    state,
    {
      onInputChange,
      toggleMode
    }
  )
);

export default enhance(Auth);