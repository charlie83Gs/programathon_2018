import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {routes} from  "./routes/routes.js";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<routes.Home />, document.getElementById('root'));
registerServiceWorker();
