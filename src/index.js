import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initStore from './app/Redux/store/index';

import './styles/index.css';
import App from './app/App';
import * as serviceWorker from './pwa/serviceWorker';

const store = initStore();

ReactDOM.render(
	<Provider store={store}>
		<ToastProvider
			autoDismiss
			autoDismissTimeout={4000}
			placement='bottom-right'
		>
			<App />
		</ToastProvider>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
