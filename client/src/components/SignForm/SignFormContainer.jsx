import { withStateHandlers, compose } from 'recompose';
import { connect } from 'react-redux';

import { startSignUp, startLogin } from '../../ducks/user';

import SignForm from './SignForm';

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
  connect(null, mapActions),
  withStateHandlers(
    state,
    {
      onInputChange
    }
  )
);

export default enhance(SignForm);