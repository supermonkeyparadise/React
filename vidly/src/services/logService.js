// import Raven from 'raven-js';

function init() {
  // Raven.config('https://c6dfe7d266b54dc28cb0f84c61b1b769@sentry.io/1273266', {
  //   release: '1-0-0',
  //   environment: 'development-test'
  // }).install();
  // 先不使用 sentry.io
}

function log(error) {
  // Raven.captureException(error);
  // 先不使用 sentry.io
  console.error(error);
}

export default { init, log };
