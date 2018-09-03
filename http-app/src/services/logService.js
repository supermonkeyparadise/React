import Raven from 'raven-js';

function init() {
  Raven.config('https://c6dfe7d266b54dc28cb0f84c61b1b769@sentry.io/1273266', {
    release: '1-0-0',
    environment: 'development-test'
  }).install();
}

function log(error) {
  Raven.captureException(error);
}

export default { init, log };
