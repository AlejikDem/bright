import { connect } from 'react-redux';
import App from './App';

const mapState = ({ user }) => ({
  isLoggedIn: user.isLoggedIn
});

export default connect(mapState)(App);