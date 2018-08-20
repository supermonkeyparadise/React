import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
import Counters from './components/counters';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Counters />, document.getElementById('root'));
registerServiceWorker();
