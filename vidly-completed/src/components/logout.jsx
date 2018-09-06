import { Component } from 'react';

import auth from '../services/authService';

class Logout extends Component {
  componentDidMount() {
    auth.logout();

    // refresh page!!(重新載入頁面)
    window.location = '/';
  }

  render() {
    return null;
  }
}

export default Logout;
