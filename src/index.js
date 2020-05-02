import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import ReactDOM from 'react-dom';

import './styles/index.css';
import App from './app/App';

ReactDOM.render(
	<ToastProvider autoDismiss autoDismissTimeout={4000} placement='bottom-right'>
		<App />
	</ToastProvider>,
	document.getElementById('root')
);
