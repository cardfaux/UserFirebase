import { createStore, applyMiddleware, compose } from 'redux';
import serviceApp from '../reducers/index';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initStore = () => {
	const middlewares = [thunk];
	const composeEnhancers =
		(typeof window !== 'undefined' &&
			window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
		compose;

	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(logger);
	}

	const store = createStore(
		serviceApp,
		composeEnhancers(applyMiddleware(...middlewares))
	);

	return store;
};

export default initStore;
