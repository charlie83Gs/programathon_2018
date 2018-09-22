import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {routes} from  "./routes/routes.js";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<routes.Default/>, document.getElementById('root'));
registerServiceWorker();
