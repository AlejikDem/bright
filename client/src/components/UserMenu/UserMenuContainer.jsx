import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { signOut } from '../../ducks/user';

import UserMenu from './UserMenu';

const mapState = ({ user }) => ({
  isLoggedIn: user.isLoggedIn,
  user: user.user
});

const mapActions = {
  signOut
};

const enhance = compose(
  connect(mapState, mapActions),
  withHandlers({
    onSignOut: ({ signOut }) => () => {
      signOut();
    }
  })
);

export default enhance(UserMenu);