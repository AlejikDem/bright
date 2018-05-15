import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { startInit } from './ducks/auth';

import App from './App';

const mapState = ({ user, auth }) => ({
  isLoggedIn: user.isLoggedIn,
  isInitiated: auth.isInitiated
});

const mapActions = {
  startInit
};

const enhance = compose(
  connect(mapState, mapActions),
  lifecycle({
    componentDidMount() {
      this.props.startInit();
    }
  }),
);

export default enhance(App);