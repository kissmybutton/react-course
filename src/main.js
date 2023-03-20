import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const e = React.createElement;

ReactDOM.createRoot(document.getElementById('root')).render(e(React.StrictMode, null, e(App)));
