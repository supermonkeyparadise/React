import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
import Counter from './components/counter';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
