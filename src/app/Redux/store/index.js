import { createStore, applyMiddleware, compose } from 'redux';
import FirebaseApp from '../reducers/index';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const createdStore = () => {
	const middlewares = [thunk];
	const composeEnhancers =
		(typeof window !== 'undefined' &&
			window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
		compose;

	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(logger);
	}

	const store = createStore(
		FirebaseApp,
		composeEnhancers(applyMiddleware(...middlewares))
	);

	return store;
};

export default createdStore;
