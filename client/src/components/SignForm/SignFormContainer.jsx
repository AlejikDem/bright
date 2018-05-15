import { withStateHandlers, lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { startSignUp, startLogin } from '../../ducks/user';

import SignForm from './SignForm';

const mapState = ({ user }) => ({
  isLoggedIn: user.isLoggedIn
});

const mapActions = {
  startSignUp,
  startLogin
};

const state = {
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

const enhance = compose(
  withRouter,
  connect(mapState, mapActions),
  lifecycle({
    componentWillReceiveProps({ isLoggedIn, history }) {
      if (isLoggedIn) history.push('/');
    }
  }),
  withStateHandlers(
    state,
    {
      onInputChange
    }
  )
);

export default enhance(SignForm);