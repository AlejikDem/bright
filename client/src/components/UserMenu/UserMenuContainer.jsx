import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { startLogout } from '../../ducks/auth';

import UserMenu from './UserMenu';

const mapState = ({ user }) => ({
  user: user.user
});

const mapActions = {
  startLogout
};

const enhance = compose(
  connect(mapState, mapActions),
  withHandlers({
    onSignOut: ({ startLogout }) => () => {
      startLogout();
    }
  })
);

export default enhance(UserMenu);