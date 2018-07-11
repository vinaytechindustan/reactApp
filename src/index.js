import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MApp from './container/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MApp />, document.getElementById('root'));
registerServiceWorker();
