import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

Raven.config('https://c6dfe7d266b54dc28cb0f84c61b1b769@sentry.io/1273266', {
  release: '1-0-0',
  environment: 'development-test'
}).install();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
